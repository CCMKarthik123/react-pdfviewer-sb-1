import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

// Provide a public PDF URL or use your own
const pdfUrl = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

function ViewPDFFiles() {
  return (
    <div>
      <PdfViewerComponent
        id="pdfViewer"
        documentPath={pdfUrl}
        style={{ height: '80vh', width: '100%' }}
        toolbarSettings={{ showTooltip: true }}
        resourceUrl = {window.location.origin + "/assets/ej2-pdfviewer-lib"}
      >
        <Inject services={[Toolbar, FormDesigner, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch]} />
      </PdfViewerComponent>
    </div>
  );
}

export default ViewPDFFiles;
