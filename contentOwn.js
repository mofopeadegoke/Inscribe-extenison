console.log("Exists");
document.querySelectorAll("p").forEach((el) => {
  el.style.color = "blue";
  console.log("Hello");
});
let noteContainer = document.createElement("div");
let noteRow = document.createElement("div");
let moreIcon = document.createElement("img");
let dateText = document.createElement("p");
dateText.textContent = "17 - 08 - 2023";
moreIcon.src = "images/three-dots.svg";
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
moreIcon.style.fontWeight = "700";
moreIcon.style.fontSize = "30px";
moreIcon.style.display = "inline-flex";
moreIcon.style.letterSpacing = "5px";
moreIcon.style.margin = "0px";
moreIcon.style.height = "100%";
moreIcon.style.verticalAlign = "middle";
dateText.style.margin = "0px";
dateText.style.display = "inline-flex";
dateText.style.fontSize = "10px";
noteRow.append(moreIcon);
noteRow.append(dateText);
noteContainer.append(noteRow);
noteContainer.append(noteContent);
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
