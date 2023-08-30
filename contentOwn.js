console.log("Exists");
document.querySelectorAll("p").forEach((el) => {
  el.style.color = "blue";
  console.log("Hello");
});
let noteContainer = document.createElement("div");
let noteRow = document.createElement("div");
let moreIcon = document.createElement("span");
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
dateText.textContent = "17 - 08 - 2023";
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
noteRow.style.minHeight = "15px";
noteRow.style.maxWidth = "100%";
noteRow.style.backgroundColor = "#ccc";
noteRow.style.height = "20px";
noteRow.style.cursor = "move";
noteRow.style.display = "flex";
noteRow.style.flexDirection = "row";
noteRow.style.justifyContent = "space-between";
noteRow.style.alignItems = "center";
noteRow.style.paddingInline = "5px";
noteContent.contentEditable = true;
noteContent.style.minWidth = "180px";
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
containerEl.style.width = "180px";
containerEl.style.height = "6rem";
containerEl.style.position = "absolute";
containerEl.style.top = "0px";
containerEl.style.left = "0px";
themeContainerEl.style.display = "flex";
themeContainerEl.style.width = "180px";
themeContainerEl.style.height = "35px";
themeContainerEl.style.background = "black";
themeContainerEl.style.flexDirection = "row";
themeContainerEl.style.marginBottom = "0px";
let themeArr = ["red", "blue", "yellow", "green", "mint", "black", "white"];
themeEls.forEach((element) => {
  element.style.width = "30px";
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
  } else if (element.className == "blue_") {
    element.style.background = "#89ABE3FF";
  } else if (element.className == "yellow_") {
    element.style.background = "#F2AA4CFF";
  } else if (element.className == "green_") {
    element.style.background = "#2BAE66FF";
  } else if (element.className == "mint_") {
    element.style.background = "#ADEFD1FF";
  } else if (element.className == "black_") {
    element.style.background = "#101820FF";
  } else if (element.className == "white_") {
    element.style.background = "#dddccc";
  }
});
containerPEl.style.background = "cyan";
containerPEl.style.padding = "5px 10px";
containerPEl.style.marginTop = "0px";
