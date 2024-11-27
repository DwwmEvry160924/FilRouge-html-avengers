const put_card = document.getElementById("projets_consult");
// projects_testes = [
//   {
//     "id": 1,
//     "nom": "IronMan",
//     "image": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3421528F5E3679CEA7D89FE51BE6DE6904289364AD148688A2E236A340144BF6/scale?width=1200&aspectRatio=1.78&format=webp",
//     "datedefin": "2024-12-31",
//     "description": "Tony Stark, um bilionário genial, filantropo e super-herói com uma armadura avançada.",
//     "chef": "Eduardo",
//     "membres": ["Soren", "Nagib", "Leesha"]
//   },
//   {
//     "id": 2,
//     "nom": "CaptainAmerica",
//     "image": "https://www.ed92.org/wp-content/uploads/2021/06/captain-america-2-scaled.jpg",
//     "datedefin": "2024-12-31",
//     "description": "Steve Rogers, um soldado lendário e líder dos Vingadores.",
//     "chef": "Soren",
//     "membres": ["Eduardo", "Leesha", "Nagib"]
//   },
//   {
//     "id": 3,
//     "nom": "Thor",
//     "image": "https://www.ed92.org/wp-content/uploads/2021/05/THOR-780x406.jpg",
//     "datedefin": "2024-12-31",
//     "description": "O deus do trovão de Asgard, portador do martelo Mjolnir.",
//     "chef": "Leesha",
//     "membres": ["Nagib", "Eduardo", "Soren"]
//   },
//   {
//     "id": 4,
//     "nom": "BlackWidow",
//     "image": "https://www.leparisien.fr/resizer/gX5i5_4SOA5QC7uD3n9fbsSzzzQ=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/KKGKJ2SD7K65MFH73PSJ354A3Y.jpg",
//     "datedefin": "2024-12-31",
//     "description": "Natasha Romanoff, uma espiã altamente treinada e habilidosa em combate.",
//     "chef": "Nagib",
//     "membres": ["Leesha", "Eduardo", "Soren"]
//   },
//   {
//     "id": 5,
//     "nom": "Hulk",
//     "image": "https://www.radiofrance.fr/s3/cruiser-production-eu3/2022/09/cae51e07-8b70-48fd-afd9-655746e5df5b/640x340_avengers-l-ere-de-l-ultron-3d-2015-035.jpg",
//     "datedefin": "2024-12-31",
//     "description": "Bruce Banner, um cientista brilhante que se transforma no poderoso Hulk.",
//     "chef": "Eduardo",
//     "membres": ["Nagib", "Soren", "Leesha"]
//   },
//   {
//     "id": 6,
//     "nom": "Spider-Man",
//     "image": "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png",
//     "datedefin": "2024-12-31",
//     "description": "Peter Parker, um jovem herói com habilidades de aranha e um grande senso de responsabilidade.",
//     "chef": "Soren",
//     "membres": ["Eduardo", "Nagib", "Leesha"]
//   }
// ]
// localStorage.setItem("projects", JSON.stringify(projects_testes));

list_json = JSON.parse(localStorage.getItem("projects"))|| [];

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

let projects = document.querySelectorAll(".projet");
projects.forEach((element) => {
  element.onclick = () => {
    console.log(element.id);
    localStorage.setItem("id_project", JSON.stringify(element.id));
  };
});

// --------------------- put to favorites ---------------------

const put_card_favorites = document.getElementById("projets_favorites");

put_favorites();
function put_favorites() {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.forEach((favorite) => {
    image = favorite.image;
    projet_card = `
                <div id="${favorite.id}" class="card text-bg-dark m-2 mb-4 card-img-project projet-favorites
                ">
                 <a href="projet.html">
                    <img
                      src="${image}"
                      class="card-img card-hover h-100"
                      alt="image du projet "
                  /></a>
                </div>
              
    `;
    put_card_favorites.insertAdjacentHTML("beforeend", projet_card);
  });
}

// --------------------- go to page projet by favorites---------------------
let projects_favorites = document.querySelectorAll(".projet-favorites");
projects_favorites.forEach((element) => {
  element.onclick = () => {
    console.log(element.id);
    localStorage.setItem("id_project", JSON.stringify(element.id));
  };
});

// ------------------------------- Tableaux fermés ---------------------------------------
delete_from_fermes();
// to get the delete

function delete_from_fermes() {
  const list_deleted = JSON.parse(localStorage.getItem("deleted")) || [];
  list_deleted.forEach((element) => {
    const tab_closed = document.getElementById("tab-closed");
    let tab = ` <div class="col-8">
                    <div class="card text-bg-dark m-2 card-hover">
                      <img
                        src="${element.image}"
                        class="card-img"
                        alt="image projet 1"
                      />
                    </div>
                  </div>`;

    tab_closed.insertAdjacentHTML("beforeend", tab);
  });
}



