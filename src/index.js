import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt3VVhhQlBPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9mSXhSdkRqW39cc3ZTQmFXUkQ=');

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);