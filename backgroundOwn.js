// // Speech to text
// const micBtn = document.querySelector(".micImg"),
//   pasteBtn = document.querySelector(".pasteResult");
// var a,
//   iterator = 0,
//   isRecording = false;
// micBtn.addEventListener("click", () => {
//   micBtn.classList.toggle("on");
//   isRecording = !isRecording;
//   if (micBtn.className == "micImg on" && isRecording) {
//     pasteBtn.classList.add("off");
//     chrome.tabs.query({ currentWindow: true, active: true }, (tab) => {
//       chrome.tabs.sendMessage(
//         tab[0].id,
//         {
//           message: "Start Recording",
//         },
//         function (response) {
//           if (response) {
//             a = response.value;
//           }
//           console.log(response);
//         }
//       );
//     });
//   }
//   if (!isRecording) {
//     micBtn.click();
//     micBtn.click();
//     setTimeout(clickable, 1000);
//   }
//   function clickable() {
//     pasteBtn.classList.remove("off");
//   }
// });
// textAreaText.textContent = "";

// pasteBtn.addEventListener("click", () => {
//   textAreaText.textContent += " " + a;
//   console.log(a);
// });
