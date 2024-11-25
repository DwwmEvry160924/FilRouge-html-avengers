const put_card = document.getElementById("projets_consult");

list_json = JSON.parse(localStorage.getItem("projects")) || [];

list_json.forEach((projet) => {
  image = projet.image;
  projet_card = `
                <div id="${projet.id}" class="card text-bg-dark m-2 mb-4 card-img-project projet
                ">
                 <a href="projet.html">
                    <img
                      src="${image}"
                      class="card-img card-hover h-100"
                      alt="image projet 1"
                  /></a>
                </div>
              
    `;
  put_card.insertAdjacentHTML("beforeend", projet_card);
});
// --------------------- go to page projet ---------------------

console.log("------to get project ------");
let projects = document.querySelectorAll(".projet");
projects.forEach((element) => {
  console.log(element);
  element.onclick = () => {
    console.log(element.id);
    localStorage.setItem("id_project", JSON.stringify(element.id));
    window.location.href = `product.html`;
  };
});
