// Aguarda carregamento dos elementos da página para o DOM(Document Object Model)
document.addEventListener("DOMContentLoaded", () => {
            const carousel = document.querySelector("#carousel");

            const images = [
                "/assets/cliente1.png",
                "/assets/cliente2.png",
                "/assets/cliente3.png",
                "/assets/cliente4.png",
                "/assets/cliente5.png"
];
             

// Criação de função para criar grupos de cartões   
            const createGroup = (isAriaHidden) => {
                const group = document.createElement("div");
                group.id = "group";
                if (isAriaHidden) group.setAttribute("aria-hidden", "true");

                for (let i = 0; i < images.length; i++) {
                    const card = document.createElement("div");
                    card.id = "card";
                    

                    // Cria o elemento <img> e define suas propriedades
                    const img = document.createElement("img");
                    img.src = images[i];
                    img.alt = `Imagem ${i + 1}`;
                    img.loading = "lazy"; // melhora desempenho no carregamento

                    // Adiciona a imagem ao cartão
                    card.appendChild(img);

                    // Adiciona o cartão ao grupo
                    group.appendChild(card);
                }    
//Chama a função para criar os grupos de cartões
                return group;
            };
// Adiciona os grupos de cartões ao carrossel, definindo o segundo grupo como aria-hidden
            carousel.appendChild(createGroup(false));
            carousel.appendChild(createGroup(true));
        });

