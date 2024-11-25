id_project = JSON.parse(localStorage.getItem("id_project")) || [];
projects = JSON.parse(localStorage.getItem("projects")) || [];
projects.forEach((element) => {
  if (element.id == id_project) {
    console.log(element);
    let title = document.getElementById("title");
    title.textContent = element.nom;
  }
});

// ---------- btn Favori -----------
const btn_favoris = document.getElementById("btn-favorites");

btn_favoris.addEventListener("click", () => {
  btn_favoris.className = "btn-favo";
  console.log("ok");
});

// ---------- btn delete -----------

const btn_delete = document.getElementById("btn_delete");

btn_delete.addEventListener("click", () => {
  console.log(" btn_delete clicdo");
  let list = []

  projects.forEach((element) => {

    if (element.id == id_project) {
      console.log(projects.indexOf(element));
      delete projects[projects.indexOf(element)];

      alert(`projet ${element.nom}`);
      localStorage.removeItem(projects.indexOf(element));

      // window.location.href = `index.html`;
    }
  });
});

