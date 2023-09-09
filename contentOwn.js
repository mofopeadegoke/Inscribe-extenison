console.log("Exists");
document.querySelectorAll("p").forEach((el) => {
  el.style.color = "blue";
  console.log("Hello");
});
let noteContainer = document.createElement("div");
let noteRow = document.createElement("div");
let moreIcon = document.createElement("span");
moreIcon.classList.add("noteMoreIcon_");
let dateText = document.createElement("p");
let moreContent = document.createElement("article");
let themeContainer = document.createElement("article");
let redTheme = document.createElement("div");
let blueTheme = document.createElement("div");
let yellowTheme = document.createElement("div");
let greenTheme = document.createElement("div");
let mintTheme = document.createElement("div");
let blackTheme = document.createElement("div");
let whiteTheme = document.createElement("div");
let deleteText = document.createElement("p");
moreContent.classList.add("container_");
themeContainer.classList.add("theme_");
redTheme.classList.add("red_");
blueTheme.classList.add("blue_");
yellowTheme.classList.add("yellow_");
greenTheme.classList.add("green_");
mintTheme.classList.add("mint_");
blackTheme.classList.add("black_");
whiteTheme.classList.add("white_");
deleteText.textContent = "Delete";
let d = new Date();
dateText.textContent = `${d.getDate()} - ${
  d.getMonth() + 1
} - ${d.getFullYear()}`;
moreIcon.textContent = "...";
let noteContent = document.createElement("div");
noteContainer.style.color = "black";
noteContainer.style.position = "absolute";
noteContainer.style.top = "10px";
noteContainer.style.left = "10px";
noteContainer.style.transition = "all 0.1s ease-out";
noteContainer.style.zIndex = 999999999999999;
noteContainer.style.fontSize = "14px";
noteContainer.style.width = "fit-content";
noteContainer.style.height = "fit-content";
noteContainer.style.display = "flex";
noteContainer.style.flexDirection = "column";
noteContainer.style.transition = "0.1s ease-out";
noteContainer.style.boxShadow = "0.4px 0.4px 10px 0.01px black";
noteRow.style.minWidth = "180px";
noteRow.style.minHeight = "25px";
noteRow.style.maxWidth = "100%";
noteRow.style.backgroundColor = "#ccc";
noteRow.style.height = "25px";
noteRow.style.cursor = "move";
noteRow.style.display = "flex";
noteRow.style.flexDirection = "row";
noteRow.style.justifyContent = "space-between";
noteRow.style.alignItems = "center";
noteRow.style.paddingInline = "5px";
noteContent.contentEditable = true;
noteContent.style.minWidth = "180px";
noteContent.style.width = "180px";
noteContent.style.minHeight = "100px";
noteContent.style.padding = "5px";
noteContent.style.height = "176px";
noteContent.style.overflow = "auto";
noteContent.style.backgroundColor = "#f5f5f5";
noteContent.style.outline = "none";
noteContent.style.resize = "both";
moreIcon.style.display = "inline-block";
moreIcon.style.fontSize = "20px";
moreIcon.style.fontWeight = "bolder";
moreIcon.style.letterSpacing = "1.2px";
moreIcon.style.padding = "0px";
moreIcon.style.marginTop = "-10px";
moreIcon.style.textAlign = "center";
moreIcon.style.overflow = "hidden";
// moreIcon.style.verticalAlign = "middle";
dateText.style.margin = "0px";
dateText.style.display = "inline-flex";
dateText.style.fontSize = "10px";
themeContainer.append(redTheme);
themeContainer.append(blueTheme);
themeContainer.append(yellowTheme);
themeContainer.append(greenTheme);
themeContainer.append(mintTheme);
themeContainer.append(blackTheme);
themeContainer.append(whiteTheme);
moreContent.append(themeContainer);
moreContent.append(deleteText);
noteRow.append(moreIcon);
noteRow.append(dateText);
noteContainer.append(noteRow);
noteContainer.append(noteContent);
noteContainer.append(moreContent);
let active = false;
let currentX, currentY, initialX, initialY;
noteRow.addEventListener("mousedown", dragStart);
noteRow.addEventListener("mouseup", dragEnd);
noteRow.addEventListener("mouseout", dragEnd);
noteRow.addEventListener("mousemove", throttle(drag, 10));

function dragStart(e) {
  e.preventDefault();
  initialX = e.clientX - noteRow.getBoundingClientRect().left;
  initialY = e.clientY - noteRow.getBoundingClientRect().top;
  active = true;
}

function dragEnd() {
  active = false;
}

function drag(e) {
  if (!active) {
    return;
  }
  if (
    noteRow.getBoundingClientRect().left < 10 ||
    noteRow.getBoundingClientRect().top < 10
  ) {
    dragEnd();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    noteContainer.style.left = currentX + 10 + "px";
    noteContainer.style.top = currentY + 10 + "px";
    return;
  }
  e.preventDefault();
  currentX = e.clientX - initialX;
  currentY = e.clientY - initialY;
  requestAnimationFrame(updatePosition);

  // noteContainer.style.left = currentX + "px";
  // noteContainer.style.top = currentY + "px";
}

function updatePosition() {
  noteContainer.style.left = currentX + "px";
  noteContainer.style.top = currentY + "px";
}

function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
}

document.body.append(noteContainer);

let containerEl = document.querySelector(".container_");
let themeContainerEl = document.querySelector(".theme_");
let themeEls = document.querySelectorAll(".container_ div");
let containerPEl = document.querySelector(".container_ p");
let moreIconEl = document.querySelector(".noteMoreIcon_");
containerEl.style.minWidth = "180px";
containerEl.style.width = "100%";
containerEl.style.height = "65px";
containerEl.style.background = "white";
containerEl.style.position = "absolute";
containerEl.style.top = "0px";
containerEl.style.left = "0px";
containerEl.style.transform = "scaleY(0)";
containerEl.style.transformOrigin = "top";
containerEl.style.transition = "all 0.1s ease-in";
themeContainerEl.style.display = "flex";
themeContainerEl.style.width = "100%";
themeContainerEl.style.height = "35px";
themeContainerEl.style.background = "black";
themeContainerEl.style.flexDirection = "row";
themeContainerEl.style.marginBottom = "0px";
moreIconEl.addEventListener("mouseover", () => {
  containerEl.style.transform = "scaleY(1)";
});
containerEl.addEventListener("mouseover", () => {
  containerEl.style.transform = "scaleY(1)";
});
containerEl.addEventListener("mouseleave", () => {
  containerEl.style.transform = "scaleY(0)";
});
let themeArr = ["red", "blue", "yellow", "green", "mint", "black", "white"];
themeEls.forEach((element) => {
  element.style.width = "calc(100% / 7)";
  element.style.height = "35px";
  // for (i = 0; i < themeArr.length; i++) {
  //   if (themeArr[i] == "red") {
  //     element.style.background = "#c54245";
  //     element.style.color = "#ECECEE";
  //     return;
  //   } else if (themeArr[i] == "blue") {
  //     element.style.background = "#89ABE3FF";
  //     element.style.color = "#FCF6F5FF";
  //     return;
  //   } else if (themeArr[i] == "yellow") {
  //     element.style.background = "#F2AA4CFF";
  //     element.style.color = "#101820FF";
  //     return;
  //   } else if (themeArr[i] == "green") {
  //     element.style.background = "#2BAE66FF";
  //     element.style.color = "#FCF6F5FF";
  //     return;
  //   } else if (themeArr[i] == "mint") {
  //     element.style.background = "#222";
  //     element.style.color = "#ADEFD1FF";
  //     return;
  //   } else if (themeArr[i] == "black") {
  //     element.style.background = "#101820FF";
  //     element.style.color = "#FEE715FF";
  //     return;
  //   } else if (themeArr[i] == "white") {
  //     element.style.background = "#dddccc";
  //     element.style.color = "black";
  //     return;
  //   }
  // }
  if (element.className == "red_") {
    element.style.background = "#c54245";
    element.addEventListener("click", () => {
      noteContent.style.backgroundColor = "#c54245";
      noteContent.style.color = "#ECECEE";
      noteRow.style.backgroundColor = "#B12E31";
      noteRow.style.color = "#ECECEE";
    });
  } else if (element.className == "blue_") {
    element.style.background = "#89ABE3FF";
    element.addEventListener("click", () => {
      noteContent.style.backgroundColor = "#89ABE3FF";
      noteContent.style.color = "#FCF6F5FF";
      noteRow.style.backgroundColor = "#6C8DB7FF";
      noteRow.style.color = "#FCF6F5FF";
    });
  } else if (element.className == "yellow_") {
    element.style.background = "#F2AA4CFF";
    element.addEventListener("click", () => {
      noteContent.style.backgroundColor = "#F2AA4CFF";
      noteContent.style.color = "#101820FF";
      noteRow.style.backgroundColor = "#D1883AFF";
      noteRow.style.color = "#101820FF";
    });
  } else if (element.className == "green_") {
    element.style.background = "#2BAE66FF";
    element.addEventListener("click", () => {
      noteContent.style.backgroundColor = "#2BAE66FF";
      noteContent.style.color = "#FCF6F5FF";
      noteRow.style.backgroundColor = "#1D8E4DFF";
      noteRow.style.color = "#FCF6F5FF";
    });
  } else if (element.className == "mint_") {
    element.style.background = "#ADEFD1FF";
    element.addEventListener("click", () => {
      noteContent.style.backgroundColor = "#222";
      noteContent.style.color = "#ADEFD1FF";
      noteRow.style.backgroundColor = "#111";
      noteRow.style.color = "#ADEFD1FF";
    });
  } else if (element.className == "black_") {
    element.style.background = "#101820FF";
    element.addEventListener("click", () => {
      noteContent.style.backgroundColor = "#101820FF";
      noteContent.style.color = "#FEE715FF";
      noteRow.style.backgroundColor = "#080C14FF";
      noteRow.style.color = "#FEE715FF";
    });
  } else if (element.className == "white_") {
    element.style.background = "#dddccc";
    element.addEventListener("click", () => {
      noteContent.style.backgroundColor = "#f5f5f5";
      noteContent.style.color = "black";
      noteRow.style.backgroundColor = "#ccc";
      noteRow.style.color = "black";
    });
  }
});
containerPEl.style.padding = "5px 10px";
containerPEl.style.marginTop = "0px";

// Auto saving
let previousValue = noteContent.textContent;

noteContent.addEventListener("input", () => {
  if (previousValue !== noteContent.textContent) {
    previousValue = noteContent.textContent;
    const event = new Event("change");
    noteContent.dispatchEvent(event);
  }
});

noteContent.addEventListener("change", (e) => {
  var liveSavingNote;
  liveSavingNote = noteContent.textContent;
  localStorage.setItem("liveNote", liveSavingNote);
});
let value = localStorage.getItem("liveNote");
console.log(value);
noteContent.textContent = value;
