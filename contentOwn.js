console.log("Exists");
document.querySelectorAll("p").forEach((el) => {
  el.style.color = "blue";
  console.log("Hello");
});
let noteContainer = document.createElement("div");
let noteRow = document.createElement("div");
let moreIcon = document.createElement("span");
let dateText = document.createElement("p");
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
/* 
<article class="container">
  <article class="themes">
    <div class="red"></div>
    <div class="blue"></div>
    <div class="yellow"></div>
    <div class="green"></div>
    <div class="red"></div>
    <div class="blue"></div>
    <div class="yellow"></div>
  </article>
  <p>
   Delete
  </p>
</article>

.container {
  background: #ddd;
  width: 180px;
  height: 6rem;
}
.themes {
  display: flex;
  width: 180px;
  height: 35px;
  background: black;
  flex-direction: row;
  margin-bottom: 0px;
}
article div {
  width: 30px;
  height: 35px;
}
.red {
  background: red;
}
.blue {
  background: blue;
}
.yellow {
  background: yellow;
}
.green {
  background: green;
}
p {
  background: cyan;
  padding: 5px 10px;
  margin-top: 0px;
}
*/
