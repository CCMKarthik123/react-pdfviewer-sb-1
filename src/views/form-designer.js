import { PdfViewerComponent, Toolbar, Navigation, FormDesigner, FormFields, Print, TextSelection, Magnification, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';

const pdfUrl = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";

function FormDesignerSample() {
  let viewer;
  return (
    <div>
      <PdfViewerComponent
        ref={(scope) => { viewer = scope; }}
        id="formDesigner"
        documentPath={pdfUrl}
        style={{ height: '80vh', width: '100%' }}
        resourceUrl = {window.location.origin + "/assets/ej2-pdfviewer-lib"}
        documentLoad={documentLoaded}
      >
        <Inject services={[Toolbar, FormDesigner, FormFields,Print, TextSelection, Magnification, Navigation, TextSearch]} />
      </PdfViewerComponent>
    </div>
  );
  function documentLoaded (args) {
        if (args.documentName === 'form-designer.pdf') {
            viewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } } );
            viewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 } } );
            viewer.formDesignerModule.addFormField("Textbox", { name: "Last Name", bounds: { X: 530, Y: 229, Width: 150, Height: 24 } } );
            viewer.formDesignerModule.addFormField("RadioButton", { bounds: { X: 148, Y: 289, Width: 18, Height: 18 }, name: "Gender", isSelected: false } );
            viewer.formDesignerModule.addFormField("RadioButton", { bounds: { X: 292, Y: 289, Width: 18, Height: 18 }, name: "Gender", isSelected: false } );
            viewer.formDesignerModule.addFormField("Textbox", { name: "DOB Month", bounds: { X: 146, Y: 320, Width: 35, Height: 24 } } );
            viewer.formDesignerModule.addFormField("Textbox", { name: "DOB Date", bounds: { X: 193, Y: 320, Width: 35, Height: 24 } } );
            viewer.formDesignerModule.addFormField("Textbox", { name: "DOB Year", bounds: { X: 242, Y: 320, Width: 35, Height: 24 } } );
            viewer.formDesignerModule.addFormField("InitialField", { name: "Agree", bounds: { X: 148, Y: 408, Width: 200, Height: 43 } } );
            viewer.formDesignerModule.addFormField("InitialField", { name: "Do Not Agree", bounds: { X: 148, Y: 466, Width: 200, Height: 43 } } );
            viewer.formDesignerModule.addFormField("CheckBox", { name: "Text Message", bounds: { X: 56, Y: 664, Width: 20, Height: 20 }, isChecked: false } );
            viewer.formDesignerModule.addFormField("CheckBox", { name: "Email", bounds: { X: 242, Y: 664, Width: 20, Height: 20 }, isChecked: false } );
            viewer.formDesignerModule.addFormField("CheckBox", { name: "Appointment Reminder", bounds: { X: 56, Y: 740, Width: 20, Height: 20 }, isChecked: false } );
            viewer.formDesignerModule.addFormField("CheckBox", { name: "Request for Customerservice", bounds: { X: 56, Y: 778, Width: 20, Height: 20 }, isChecked: false } );
            viewer.formDesignerModule.addFormField("CheckBox", { name: "Information Billing", bounds: { X: 290, Y: 740, Width: 20, Height: 20 }, isChecked: false } );
            viewer.formDesignerModule.addFormField("Textbox", { name: "My Email", bounds: { X: 146, Y: 850, Width: 200, Height: 24 } } );
            viewer.formDesignerModule.addFormField("Textbox", { name: "My Phone", bounds: { X: 482, Y: 850, Width: 200, Height: 24 } } );
            viewer.formDesignerModule.addFormField("SignatureField", { name: "Sign", bounds: { X: 57, Y: 923, Width: 200, Height: 43 } } );
            viewer.formDesignerModule.addFormField("Textbox", { name: "DOS Month", bounds: { X: 386, Y: 923, Width: 35, Height: 24 } } );
            viewer.formDesignerModule.addFormField("Textbox", { name: "DOS Date", bounds: { X: 434, Y: 923, Width: 35, Height: 24 } } );
            viewer.formDesignerModule.addFormField("Textbox", { name: "DOS Year", bounds: { X: 482, Y: 923, Width: 35, Height: 24 } } );
        }
    }
}

export default FormDesignerSample;