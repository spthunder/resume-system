import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadPDF = page => {
  html2canvas(page).then(function(canvas) {
    canvas2PDF(canvas)
    console.log("width" + canvas.width)
    console.log("height" + canvas.height)
  });
};
const canvas2PDF = canvas => {
    let contentWidth = canvas.width;
    let contentHeight = canvas.height;
    
    let imgWidth = 595.28;
    let imgHeight = 592.28/contentWidth * contentHeight;
    let pdf = new jsPDF("p", "pt");
    pdf.addImage(
        canvas.toDataURL("image/jpeg", 1.0),
        "JPEG",
        0,
        0,
        imgWidth,
        imgHeight
      );
      pdf.save("导出.pdf");
}