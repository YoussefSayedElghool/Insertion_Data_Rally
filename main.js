
ActiveElement = null

done = false
function Dropdown(e) {
  if (ActiveElement != null) {
    
    ActiveElement.classList.remove("show");
    
  }else{
    e.target.parentElement.children[1].classList.add("show");
  }
  ActiveElement =  e.target.parentElement.children[1];
  done = false
  console.log(e.target)
  
}

function DropUp() {
  if(done){

    ActiveElement.classList.remove("show");
    console.log(ActiveElement)
    ActiveElement = null
    done = false
  }


}

function Chooes(e) {
  e.target.parentElement.parentElement.children[0].value =
    e.target.innerText;
  console.log(e.target.parentElement.children[0]);
  done = true
  DropUp();
}

function filter(e) {
  var input = e.target;
  var filter = input.value.toUpperCase();
  var div = e.target.parentElement.children[1];
  var a = div.children;

  for (var i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1)
      a[i].style.display = "";
    else a[i].style.display = "none";
  }
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
