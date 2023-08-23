var speechBtn = document.querySelector(".startSpeech");
var textarea = document.querySelector("#textarea");
var copyBtn = document.querySelector(".copyText"),
  errorBoxEl = document.querySelector(".error-box"),
  closeErrorBtn = document.querySelector(".errorContent header img"),
  alertBox = document.querySelector(".alertMessage");
speechBtn.addEventListener("click", () => {
  if (navigator.onLine) {
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.addEventListener("result", (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript);
      textarea.textContent = transcript;
    });
    if (speech == true) {
      recognition.start();
    }
  } else {
    errorBoxEl.classList.add("see");
  }
});
copyBtn.addEventListener("click", () => {
  var text = textarea.value;
  navigator.clipboard.writeText(text);
  alertBox.classList.add("show");
  function doIt() {
    alertBox.classList.remove("show");
  }
  setTimeout(doIt, 4200);
});
closeErrorBtn.addEventListener("click", () => {
  errorBoxEl.classList.remove("see");
});
