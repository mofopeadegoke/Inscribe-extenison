var url = null;
const urlBtn = document.querySelector(".urlBtn"),
  urlInputField = document.querySelector(".urlInput");

urlInputField.addEventListener(
  "change",
  () => {
    const reader = new FileReader();
    reader.onload = () => {
      document.querySelector("embed").src = reader.result;
    };
    reader.readAsDataURL(urlInputField.files[0]);
  },
  false
);
// let pdfDoc = null,
//   pageNum = 1,
//   pageIsRendering = false,
//   pageNumIsPending = null;

// const scale = 1.5,
//   canvas = document.querySelector("#pdf-render"),
//   ctx = canvas.getContext("2d");

// // Render page
// function renderPage(num) {
//   pageIsRendering = true;

//   // Get Page
//   pdfDoc.getPage(num).then((page) => {
//     // Set scale
//     const viewport = page.getViewport({ scale });
//     canvas.width = viewport.width;
//     canvas.height = viewport.height;

//     const renderctx = {
//       canvasContext: ctx,
//       viewport,
//     };

//     page.render(renderctx).promise.then(() => {
//       pageIsRendering = false;

//       if (pageNumIsPending !== null) {
//         renderPage(pageNumIsPending);
//         pageNumIsPending = null;
//       }
//     });

//     // Output current page
//     document.querySelector(".page-num").textContent = num;
//   });
// }

// // Check for pages rendering
// const queueRenderPage = (num) => {
//   if (pageIsRendering) {
//     pageNumIsPending = num;
//   } else {
//     renderPage(num);
//   }
// };

// // Show Previous Page
// const showPrevPage = () => {
//   if (pageNum <= 1) {
//     return;
//   }
//   pageNum--;
//   queueRenderPage(pageNum);
// };

// // Show Next Page
// const showNextPage = () => {
//   if (pageNum >= pdfDoc.numPages) {
//     return;
//   }
//   pageNum++;
//   queueRenderPage(pageNum);
// };

// Get Document
if (url) {
  pdfjsLib
    .getDocument(url)
    .promise.then((pdfDocParameter) => {
      pdfDoc = pdfDocParameter;
      document.querySelector(".page-count").textContent = pdfDoc.numPages;
      renderPage(pageNum);
    })
    .catch((err) => {
      document.querySelector(".pdfBar").style.display = "none";
      document.querySelector(".pdfBody").style.display = "none";
    });
} else {
  document.querySelector(".pdfBar").style.display = "none";
  document.querySelector(".pdfBody").style.display = "none";
}

// // Button Events
// document.querySelector("#prev-btn").addEventListener("click", showPrevPage);
// document.querySelector("#next-btn").addEventListener("click", showNextPage);

// urlBtn.addEventListener("click", () => {
//   url = urlInputField.value;
//   console.log(url);
//   urlInputField.value = "";
//   pdfjsLib
//     .getDocument(url)
//     .promise.then((pdfDocParameter) => {
//       pdfDoc = pdfDocParameter;
//       document.querySelector(".page-count").textContent = pdfDoc.numPages;
//       renderPage(pageNum);
//       document.querySelector(".pdfBar").style.display = "flex";
//       document.querySelector(".pdfBody").style.display = "block";
//     })
//     .catch((err) => {
//       document.querySelector(".pdfBar").style.display = "none";
//       document.querySelector(".pdfBody").style.display = "none";
//     });
// });
