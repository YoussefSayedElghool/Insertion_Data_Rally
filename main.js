
function Chooes(e) {
  e.target.parentElement.parentElement.children[0].value =
    e.target.innerText;
  console.log(e.target.parentElement.children[0]);
}


function increasInfo(e) {
  container = e.target.parentElement.parentElement;
  console.log(container.children[1]);
  copy = container.children[1].cloneNode(true);
  container.appendChild(copy);
}


// (IllnessID, HerbsID, HowToUse, WarningsID, SymptomID, DrugInteractionsID)
function Search() {
  // Symptoms Warnings DrugInteractions illnesses
  var herbs = document.getElementsByClassName("herbs");
  var illnesses = document.getElementsByClassName("illnesses");
  var Warnings = document.getElementsByClassName("Warnings");
  var DrugInteractions =
    document.getElementsByClassName("DrugInteractions");
  var Symptoms = document.getElementsByClassName("Symptoms");

  WarningsList = [];
  for (let WarningID of Warnings) {
    WarningsList.push(WarningID.value);
  }
  SymptomsList = [];
  for (let SymptomsID of Symptoms) {
    WarningsList.push(SymptomsID.value);
  }

  DrugInteractionsList = [];
  for (let DrugInteractionsID of DrugInteractions) {
    WarningsList.push(DrugInteractionsID.value);
  }

  // .slice(1, 3)
  eel.Add(
    herbs[0].value,
    illnesses[0].value,
    "gty",
    WarningsList,
    SymptomsList,
    DrugInteractionsList
  );
}



function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}
