// Aguarda carregamento dos elementos da página para o DOM(Document Object Model)
document.addEventListener("DOMContentLoaded", () => {
            const carousel = document.querySelector("#carousel");

// Criação de função para criar grupos de cartões   
            const createGroup = (isAriaHidden) => {
                const group = document.createElement("div");
                group.id = "group";
                if (isAriaHidden) group.setAttribute("aria-hidden", "true");

                for (let i = 1; i <= 6; i++) {
                    const card = document.createElement("div");
                    card.id = "card";
                    card.textContent = i;
                    group.appendChild(card);
                }
//Chama a função para criar os grupos de cartões
                return group;
            };
// Adiciona os grupos de cartões ao carrossel, definindo o segundo grupo como aria-hidden
            carousel.appendChild(createGroup(false));
            carousel.appendChild(createGroup(true));
        });