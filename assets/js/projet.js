id_project = JSON.parse(localStorage.getItem("id_project")) || []; // to get the id is the current project and to becomes a JavaScript object.
projects = JSON.parse(localStorage.getItem("projects")) || []; // to get the list of projects and to becomes a JavaScript object.

projects.forEach((element) => {
  if (element.id == id_project) {
    // dans la mother list get only the current project (id_project)
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

// ------------------------------------------------------ btn Favori -------------------------------------------------------

const btn_favoris = document.getElementById("btn-favorites");

let list_faorite = JSON.parse(localStorage.getItem("favorites")) || []; // to list in local storageget and to becomes a JavaScript object.

btn_favoris.addEventListener("click", () => {
  // event in star button
  btn_favoris.className = "btn-favo";
  projects.forEach((element) => {
    // in each project compare the id
    if (element.id == id_project) {
      if (!list_faorite.some((item) => item.id === element.id)) {
        // some item in list favorites is the current project or the id
        list_faorite.push(element);
        localStorage.setItem("favorites", JSON.stringify(list_faorite));
        alert(`Project ${element.nom} added to favorites!`);
      } else {
        delete_from_favorites();
        alert(`Project ${element.nom} deleted from favorites!`); // if the project is already in the list of favorites tha's will be deleted
      }
    }
  });
});

// ------------------------------------------- btn delete --------------------------------------------
let list_deleted = JSON.parse(localStorage.getItem("deleted")) || []; // to get and to becomes a JavaScript object.

const btn_delete = document.getElementById("btn_delete"); // to get delet button

btn_delete.addEventListener("click", () => {
  console.log(" btn_delete clicdo");
  delete_from_favorites(); // to delete from favorites if the project is in favrite list
  projects.forEach((element) => {
    if (element.id == id_project) {
      // in each project compare the current id
      list_deleted.push(element); // put the deleted projec in the deleted list for to get in the overlay deleted projects
      localStorage.setItem("deleted", JSON.stringify(list_deleted)); // add to the deleted list
      console.log(projects.indexOf(element)); // to get the index of the current project in the mother list
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
