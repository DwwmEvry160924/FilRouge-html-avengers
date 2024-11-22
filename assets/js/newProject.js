const btn_creer = document.getElementById("btn-creer");
const input_nom = document.getElementById("Nom");
getTodayDate();
const date_Fin = document.getElementById("Date-fin");
const Description = document.getElementById("Description");
const chef_pro = document.getElementById("Chef");

btn_creer.addEventListener("click", (e) => {
  if (
    input_nom.value.trim() === "" ||
    date_Fin.value.trim() === "" ||
    Description.value.trim() === "" ||
    chef_pro.value === "choisissez le Chef de projet"
  ) {
    validateForm();
    e.preventDefault();
    console.log("il y  erreur dans le formulaire");
  } else {
    console.log("ok, tudo certo ahahahaha");
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
  input_nom.value.trim() === ""
    ? (valid_input.style.display = "block")
    : (valid_input.style.display = "none");
}

// validation date

function validation_date() {
  const valid_data = document.getElementById("valid-Data");

  if (date_Fin.value.trim() === "" || date_Fin.value < today) {
    valid_data.style.display = "block";
  } else {
    valid_data.style.display = "none";
  }
}
// to get today date
function getTodayDate() {
  const date_Init = document.getElementById("Date-init");
  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = today.getFullYear();
  date_Init.textContent = `${day}/${month}/${year}`;
}
// validation description
function validation_description() {
  const valid_description = document.getElementById("valid-Description");
  Description.value.trim() === ""
    ? (valid_description.style.display = "block")
    : (valid_description.style.display = "none");
}
// validation membres
function get_membres() {
  const membres = document.querySelectorAll("input[type=checkbox]");

  let hasChecked = false;
  membres.forEach((membre) => {
    if (membre.checked) {
      hasChecked = true;
    }
  });
  const valid_membre = document.getElementById("valid-membre");
  if (hasChecked) {
    valid_membre.style.display = "none";
  } else {
    valid_membre.style.display = "block";
  }
}

// validation chef_pro
function validation_chef_pro(choice) {
  const valid_description = document.getElementById("valid-Chef");
  choice = choice.value;
  choice === "choisissez le Chef de projet"
    ? (valid_description.style.display = "block")
    : (valid_description.style.display = "none");
}

const dateInput = document.getElementById("Date-fin");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);
dateInput.addEventListener("keypress", function (e) {
  e.preventDefault();
});
