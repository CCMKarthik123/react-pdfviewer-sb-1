import { PdfViewerComponent, Toolbar, Navigation, Annotation, Print, TextSelection, TextSearch, Magnification, Inject } from '@syncfusion/ej2-react-pdfviewer';

const pdfUrl = "https://cdn.syncfusion.com/content/pdf/annotations-v2.pdf";

function AnnotationSample() {
  return (
    <div>
      <PdfViewerComponent
        id="annotationSample"
        documentPath={pdfUrl}
        style={{ height: '80vh', width: '100%' }}
        resourceUrl = {window.location.origin + "/assets/ej2-pdfviewer-lib"}
        
      >
        <Inject services={[Toolbar, Annotation, Print, TextSelection, Magnification, Navigation, TextSearch]} />
      </PdfViewerComponent>
    </div>
  );
}


export default AnnotationSample;