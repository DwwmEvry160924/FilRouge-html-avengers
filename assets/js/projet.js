id_project = JSON.parse(localStorage.getItem("id_project")) || [];
projects = JSON.parse(localStorage.getItem("projects")) || [];
projects.forEach((element) => {
  if (element.id == id_project) {
    let title = document.getElementById("title");
    title.textContent = element.nom;
    // for description
    const description = document.getElementById("description");
    description.textContent = element.description;
    // for image
    const tema_project = document.getElementById("tema");
    projet_tema = `<img class="img-tema" src="${element.image}">`;
    tema_project.insertAdjacentHTML("beforeend", projet_tema);
    
    // for chef
    const admin = document.getElementById("admin");
    admin.textContent = element.chef;
    // for membres
    const list_membres = document.getElementById("list-membres");
    let list_membres_pro = element.membres;
    list_membres_pro.forEach((membre) => {
      person = `<li class="text-center hover-link m-1">${membre}</li>`;
      list_membres.insertAdjacentHTML("beforeend", person);
    });
  }
});

// ---------- btn Favori -----------

const btn_favoris = document.getElementById("btn-favorites");

let list_faorite = JSON.parse(localStorage.getItem("favorites")) || [];

btn_favoris.addEventListener("click", () => {
  btn_favoris.className = "btn-favo";
  projects.forEach((element) => {
    if (element.id == id_project) {
      if (!list_faorite.some((item) => item.id === element.id)) {
        list_faorite.push(element);
        localStorage.setItem("favorites", JSON.stringify(list_faorite));
        alert(`Project ${element.nom} added to favorites!`);
      } else {
        delete_from_favorites();
        alert(`Project ${element.nom} deleted from favorites!`);
      }
    }
  });
});

// ---------- btn delete -----------
let list_deleted = JSON.parse(localStorage.getItem("deleted")) || [];

const btn_delete = document.getElementById("btn_delete");

btn_delete.addEventListener("click", () => {
  console.log(" btn_delete clicdo");
  delete_from_favorites();
  projects.forEach((element) => {
    if (element.id == id_project) {
      list_deleted.push(element);
      localStorage.setItem("deleted", JSON.stringify(list_deleted)); // add to the deleted list
      console.log(projects.indexOf(element));
      projects.splice(projects.indexOf(element), 1);
      console.log(projects);
      localStorage.setItem("projects", JSON.stringify(projects));
      alert(`Project ${element.nom}, Deleted !!`);
      window.location.href = `index.html`;
    }
  });
});

function delete_from_favorites() {
  list_faorite.forEach((element) => {
    if (element.id == id_project) {
      list_faorite.splice(list_faorite.indexOf(element), 1);
      localStorage.setItem("favorites", JSON.stringify(list_faorite));
    }
  });
}


