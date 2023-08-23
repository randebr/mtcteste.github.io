document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("close");
    });
});

function showDescription(itemIndex) {
  const descriptionSection = document.querySelector(".description");
  const descriptionItems = descriptionSection.querySelectorAll("li");

  const agendaItems = document.querySelectorAll(".ulShow li");

  // Hide all descriptions and remove 'active' class from agenda items
  descriptionItems.forEach(item => {
      item.style.display = "none";
  });

  agendaItems.forEach(item => {
      item.classList.remove("active");
  });

  // Show the selected description and set 'active' class to the corresponding agenda item
  const selectedDescription = document.getElementById(`description-${itemIndex}`);
  selectedDescription.style.display = "block";

  const selectedAgendaItem = document.querySelector(`.ulShow li:nth-child(${itemIndex})`);
  selectedAgendaItem.classList.add("active");
}

// Ativar a troca de descrições e itens de agenda no evento de passagem do mouse (hover)
//Caso queira ao click, é só comentar esse código abaixo colocando // no inicio de todas as linhas assim o código ficará inutilizável.
document.addEventListener("DOMContentLoaded", function () {
  const agendaItems = document.querySelectorAll(".ulShow li");
  
  agendaItems.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
          showDescription(index + 1);
      });
  });
});

// Exibir a descrição do primeiro item ao carregar a página
window.addEventListener("load", function () {
    showDescription(1);
});




