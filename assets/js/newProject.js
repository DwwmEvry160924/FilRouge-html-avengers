// we will need to change this later, and to send the data in the console.log to the database

const btn_creer = document.getElementById("btn-creer");
const input_nom = document.getElementById("Nom");
getTodayDate();
const date_Fin = document.getElementById("Date-fin");
const Description = document.getElementById("Description");
const chef_pro = document.getElementById("Chef");
const image = document.getElementById("img");

let list_json = []; // list of projects

list_json = JSON.parse(localStorage.getItem("projects")) || [];
console.log(list_json);

btn_creer.addEventListener("click", (e) => {
  if (
    input_nom.value.trim() === "" || //ps: The trim() method removes whitespace from both sides of a string
    date_Fin.value.trim() === "" ||
    Description.value.trim() === "" ||
    chef_pro.value === "choisissez le Chef de projet"
  ) {
    validateForm();
    e.preventDefault();
    console.log("il y  erreur dans le formulaire");
  } else {
    console.log("ok, tudo certo ahahahaha");
    console.log("------- put this in the database -------");
    console.log(`Nom : ${input_nom.value}`);
    console.log(`Date de fin : ${date_Fin.value}`);
    console.log(`Description : ${Description.value}`);
    console.log(`Chef : ${chef_pro.value}`);
    const membres = document.querySelectorAll("input[type=checkbox]");
    membres.forEach((membre) => {
      if (membre.checked) {
        console.log(`Membres : ${membre.value}`);
      }
    });
    console.log(`image : ${image.value}`);
    console.log("---------------------");
    alert(`Le projet ${input_nom.value} a bien ete cree`);
    

    // ----------------- put in the local storage ------------------//

    let list_membres = []; // list of membres for to put in the database

    membres.forEach((membre) => {
      // to get the membres has checked
      if (membre.checked) {
        list_membres.push(membre.value);
      }
    });

    list_json.push({
      id: list_json.length + 1,
      nom: input_nom.value,
      image: image.value, // to get the image do pro
      "date de fin": date_Fin.value,
      description: Description.value,
      chef: chef_pro.value,
      membres: list_membres,
    });
    console.log("---------------------");

    localStorage.setItem("projects", JSON.stringify(list_json)); // to save the projects in the local storage
    console.log(localStorage.getItem("projects"));
    window.location.href = "index.html";
  }
});
function validateForm() {
  validation_nom();
  validation_date();
  validation_description();
  get_membres();
  validation_chef_pro(document.getElementById("Chef"));
}

//--------------------- functions -----------------------------------

// validation nom
function validation_nom() {
  const valid_input = document.getElementById("valid-Non");
  input_nom.value.trim() === "" // remove whitespace
    ? (valid_input.style.display = "block") // manipulation display style
    : (valid_input.style.display = "none");
}

// validation date

function validation_date() {
  const valid_date = document.getElementById("valid-Date");

  if (date_Fin.value.trim() === "") {
    valid_date.style.display = "block"; // manipulation display style
  } else {
    valid_date.style.display = "none";
  }
}
// to get today date
function getTodayDate() {
  const date_Init = document.getElementById("Date-init");
  let today = new Date(); // get the current date
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = today.getFullYear();
  date_Init.textContent = `${day}/${month}/${year}`;
}
// validation description
function validation_description() {
  const valid_description = document.getElementById("valid-Description");
  Description.value.trim() === "" // remove whitespace
    ? (valid_description.style.display = "block")
    : (valid_description.style.display = "none"); // manipulation display style
}
// validation membres
function get_membres() {
  const membres = document.querySelectorAll("input[type=checkbox]"); //get all checkbox of membres
  let has_checked = false;
  membres.forEach((membre) => {
    // to check if at least one checkbox is checked
    if (membre.checked) {
      has_checked = true;
    }
  });
  const valid_membre = document.getElementById("valid-membre"); // look for the element
  if (has_checked) {
    // get the membres checked
    valid_membre.style.display = "none"; // manipulation display style of membres checked
  } else {
    valid_membre.style.display = "block";
  }
}

// validation chef_pro
function validation_chef_pro(choice) {
  const valid_description = document.getElementById("valid-Chef"); // to get input chef du projet
  choice = choice.value;
  choice === "choisissez le Chef de projet"
    ? (valid_description.style.display = "block") // manipulation display style
    : (valid_description.style.display = "none");
}

// start today the input date today
const dateInput = document.getElementById("Date-fin");
const today = new Date().toISOString().split("T")[0]; // get the current date (day), and returns a date in string and split the string
dateInput.setAttribute("min", today); // to block the date before today
dateInput.addEventListener("keypress", function (e) {
  e.preventDefault(); //to block the enter user
});
