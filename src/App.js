import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ViewPDFFiles from './views/view-pdf-files';
import FormDesigner from './views/form-designer';
import Annotation from './views/annotation';

const samples = [
  { label: 'View PDF Files', path: '/view-pdf-files' },
  { label: 'Form Designer', path: '/form-designer' },
  { label: 'Annotation', path: '/annotation' }
];

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const handleSelect = (path) => {
    setMenuOpen(false);
    if (path !== location.pathname) {
      navigate(path);
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: menuOpen ? 'hidden' : 'auto' }}>
      {/* HEADER */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#ffffff',
          boxShadow: '2px 0 12px rgba(60,60,60,0.2)',
          color: 'white',
          padding: '12px 18px',
          position: 'sticky',
          top: 0,
          zIndex: 1001,
        }}
      >
        <button
          onClick={handleMenuToggle}
          style={{
            background: 'white',
            color: '#000000',
            border: 'none',
            borderRadius: 3,
            cursor: 'pointer',
            marginRight: 18,
            padding: '4px 16px',
            fontWeight: 'bold',
            fontSize: '22px'
          }}
          aria-haspopup="listbox"
          aria-expanded={menuOpen}
        >
          &#9776;
        </button>
      </header>

      {/* CONTAINER for main and overlay/menu */}
      <div style={{ position: 'relative' }}>
        {/* OVERLAY (only covers the viewer/main) */}
        {menuOpen && (
          <div
            style={{
              position: 'fixed',
              left: 0,
              right: 0,
              top: 64, // Height of your header (~12+40px = 52, add buffer if header resizes, use offset variable if needed)
              bottom: 0,
              background: 'rgba(0,0,0,0.3)',
              zIndex: 1200,
              transition: 'opacity 0.3s'
            }}
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* MENU PANEL */}
        {menuOpen && (
          <aside
            style={{
              position: 'fixed',
              top: 64,
              left: 0,
              bottom: 0,
              width: 280,
              background: '#fff',
              zIndex: 1300,
              boxShadow: '2px 0 12px rgba(60,60,60,0.2)',
              transition: 'transform 0.3s',
              transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
              borderRight: '1px solid #eee',
            }}
            onClick={e => e.stopPropagation()} // prevent overlay close when clicking inside menu
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {samples.map(s => (
                <li
                  key={s.path}
                  style={{
                    padding: '16px 24px',
                    cursor: 'pointer',
                    fontFamily: 'helvetica',
                    fontWeight: location.pathname === s.path ? 'bold' : 'normal',
                    background: location.pathname === s.path ? '#f5f5f5' : 'transparent'
                  }}
                  onClick={() => handleSelect(s.path)}
                  tabIndex={0}
                  onKeyDown={e =>
                    (e.key === 'Enter' || e.key === ' ') && handleSelect(s.path)
                  }
                  role="option"
                  aria-selected={location.pathname === s.path}
                >
                  {s.label}
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* MAIN CONTENT */}
        <main
          style={{
            padding: 18,
            position: 'relative',
            transition: 'transform 0.3s, filter 0.3s',
            transform: menuOpen
              ? 'scale(0.94) translateX(90px)'
              : 'scale(1) translateX(0)',
            filter: menuOpen ? 'brightness(0.7)' : 'none',
            borderRadius: menuOpen ? 14 : 0,
            zIndex: 1
          }}
        >
          <Routes>
            <Route path="/view-pdf-files" element={<ViewPDFFiles />} />
            <Route path="/form-designer" element={<FormDesigner />} />
            <Route path="/annotation" element={<Annotation />} />
            <Route path="*" element={<ViewPDFFiles />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}