let nomDutilisateur = document.querySelector("#exampleFormControlInput1");
let Pseudos = document.querySelector("#message-pseudo");

const element = document.querySelector("#confirm");
const messagePseudo = document.getElementById("message-pseudo");


  element.addEventListener("click", function (e) {
    e.preventDefault();
  
    if (/[^\w\d]/.test(nomDutilisateur.value)) {
      document.getElementById("message-user").textContent =
        "Saisissez uniquement des caractères alphanumériques";
    }
    if ((messagePseudo.textContent = "" || messagePseudo.textContent === "@")) {
      messagePseudo.textContent = "@nomdecompte";
    } else {
      messagePseudo.textContent = "@" + nomDutilisateur.value;
    }
  });


let biographie = document.querySelector("#floatingTextarea2");


      element.addEventListener("click", function (e) {
        e.preventDefault();
      
      if (biographie.value.length >= 200){ 
      
           document.getElementById("message-bio").textContent = "Saisissez moins de 200 caractères"; 
         }
       });