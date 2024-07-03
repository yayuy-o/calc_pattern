function addCloth() {
  const cloth = document.getElementById("cloth");
  const clothWidth = parseInt(document.getElementById("cloth-width").value) * 2;
  const clothColor = document.getElementById("cloth-color").value;

  cloth.style =
    "background-color:" + clothColor + "; width:" + clothWidth + "px;";
}

function addMoveDiv() {
  const div = document.createElement("div");
  document.getElementById("pattern").innerHTML(div);
}

function addPattern() {
  let pNum = document.getElementsByClassName("pattern").length;

  const pattern = document.getElementById("p-sample");
  const newPattern = pattern.cloneNode(true);
  const newPHeight =
    parseInt(document.getElementById("pattern-height").value) * 2;
  const newPWidth =
    parseInt(document.getElementById("pattern-width").value) * 2;
  const newPMemo = document.getElementById("pattern-memo").value;

  newPattern.id = "p-" + pNum;
  newPattern.style = "width:" + newPWidth + "px; height: " + newPHeight + "px";
  newPattern.textContent = "H" + newPHeight / 2;
 addTransition(newPattern, newPMemo);

  document.getElementById("p-sample").after(newPattern);

  cmanOM_JS_init();
  // fitHeight();
}

// function fitHeight() {
//   const cloth = document.getElementById("cloth");
//   const graph = document.getElementById("graph");
//   const height = cloth.offsetHeight;

//   graph.style.height = height;
//   cloth.style.height = height;
// }

function addTransition(newPattern, newPMemo) {
  newPattern.className += " uk-transition-toggle";
  newPattern.tabIndex = "0";
  const tranDiv = document.createElement("div");
  tranDiv.className = "uk-transition-fade uk-overlay-default uk-flex uk-flex-center uk-flex-middle";
  newPattern.appendChild(tranDiv);

  const tranP = document.createElement("p");
  tranP.className = "uk-margin-remove uk-text-nowrap";
  tranP.textContent = newPMemo;
  tranDiv.appendChild(tranP);
}
