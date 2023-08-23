const extpaySettings = ExtPay("inscribe"),
  themeBtns = document.querySelectorAll(".theme-option");
console.log(themeBtns);
let selectedThemeUI,
  selectedThemeSettings,
  subscriptionTextEl = document.querySelector(".subscriptionText"),
  viewSubPlanEl = document.querySelector(".viewSubPlan");
selectedThemeSettings = localStorage.getItem("theme");
if (selectedThemeSettings == "yellowMode") {
  document.querySelector(".one").classList.add("selected");
} else if (selectedThemeSettings == "blueMode") {
  document.querySelector(".two").classList.add("selected");
} else if (selectedThemeSettings == "purpleMode") {
  document.querySelector(".three").classList.add("selected");
} else if (selectedThemeSettings == "greenMode") {
  document.querySelector(".four").classList.add("selected");
} else if (selectedThemeSettings == "redMode") {
  document.querySelector(".five").classList.add("selected");
} else if (selectedThemeSettings == "pinkMode") {
  document.querySelector(".six").classList.add("selected");
} else if (selectedThemeSettings == "darkMode") {
  document.querySelector(".seven").classList.add("selected");
}
if (themeBtns) {
  themeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (document.querySelector(".selected")) {
        document.querySelector(".selected").classList.remove("selected");
        btn.classList.add("selected");
        selectedThemeUI = btn.className;
        console.log(selectedThemeUI);
        if (selectedThemeUI == "theme-option one selected") {
          localStorage.setItem("theme", "yellowMode");
        } else if (selectedThemeUI == "theme-option two selected") {
          localStorage.setItem("theme", "blueMode");
        } else if (selectedThemeUI == "theme-option three selected") {
          localStorage.setItem("theme", "purpleMode");
        } else if (selectedThemeUI == "theme-option four selected") {
          localStorage.setItem("theme", "greenMode");
        } else if (selectedThemeUI == "theme-option five selected") {
          localStorage.setItem("theme", "redMode");
        } else if (selectedThemeUI == "theme-option six selected") {
          localStorage.setItem("theme", "pinkMode");
        } else if (selectedThemeUI == "theme-option seven selected") {
          localStorage.setItem("theme", "darkMode");
        }
        selectedTheme = localStorage.getItem("theme");
        if (selectedTheme == "yellowMode") {
          document.querySelectorAll(".btn").forEach((elem) => {
            elem.style.background = "rgb(245, 204, 0)";
            elem.style.color = "black";
          });
        } else if (selectedTheme == "blueMode") {
          document.querySelectorAll(".btn").forEach((elem) => {
            elem.style.background = "#3486eb";
            elem.style.color = "white";
          });
        } else if (selectedTheme == "purpleMode") {
          document.querySelectorAll(".btn").forEach((elem) => {
            elem.style.background = "purple";
            elem.style.color = "white";
          });
        } else if (selectedTheme == "greenMode") {
          document.querySelectorAll(".btn").forEach((elem) => {
            elem.style.background = "green";
            elem.style.color = "white";
          });
        } else if (selectedTheme == "redMode") {
          document.querySelectorAll(".btn").forEach((elem) => {
            elem.style.background = "darkred";
            elem.style.color = "white";
          });
        } else if (selectedTheme == "pinkMode") {
          document.querySelectorAll(".btn").forEach((elem) => {
            elem.style.background = "pink";
            elem.style.color = "black";
          });
        } else if (selectedTheme == "darkMode") {
          document.querySelectorAll(".btn").forEach((elem) => {
            elem.style.background = "#333";
            elem.style.color = "white";
          });
        }
      }
    });
  });
}
selectedTheme = localStorage.getItem("theme");
if (selectedTheme == "yellowMode") {
  document.querySelectorAll(".btn").forEach((elem) => {
    elem.style.background = "rgb(245, 204, 0)";
  });
} else if (selectedTheme == "blueMode") {
  document.querySelectorAll(".btn").forEach((elem) => {
    elem.style.background = "#3486eb";
    elem.style.color = "white";
  });
} else if (selectedTheme == "purpleMode") {
  document.querySelectorAll(".btn").forEach((elem) => {
    elem.style.background = "purple";
    elem.style.color = "white";
  });
} else if (selectedTheme == "greenMode") {
  document.querySelectorAll(".btn").forEach((elem) => {
    elem.style.background = "green";
    elem.style.color = "white";
  });
} else if (selectedTheme == "redMode") {
  document.querySelectorAll(".btn").forEach((elem) => {
    elem.style.background = "darkred";
    elem.style.color = "white";
  });
} else if (selectedTheme == "pinkMode") {
  document.querySelectorAll(".btn").forEach((elem) => {
    elem.style.background = "pink";
    elem.style.color = "black";
  });
} else if (selectedTheme == "darkMode") {
  document.querySelectorAll(".btn").forEach((elem) => {
    elem.style.background = "#333";
    elem.style.color = "white";
  });
}
extpaySettings
  .getUser()
  .then((user) => {
    if (user.paid) {
      subscriptionTextEl.textContent =
        "You are currently using Inscribe Premium";
    } else {
      subscriptionTextEl.textContent =
        " You are currently using the free version of Inscribe";
    }
  })
  .catch((err) => {
    if (subscriptionTextEl) {
      subscriptionTextEl.textContent =
        " An error occured! Check your internet connection";
    }
  });
if (viewSubPlanEl) {
  viewSubPlanEl.addEventListener("click", extpaySettings.openPaymentPage);
}
