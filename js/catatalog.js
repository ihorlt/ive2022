let cards = [
    {
        id: 1,
        img: "img/fruits/Strawberries.png",
        alt: "Strawberries",
        title: "Strawberries",
        cardText: "",
        price: 22,
        amount: "100 гр."
    },
    {
        id: 2,
        img: "img/fruits/Blueberries.png",
        alt: "Blueberries",
        title: "Blueberries",
        cardText: "",
        price: 20,
        amount: "100 гр."
    },
    {
        id: 3,
        img: "img/fruits/BramleyCookingApples.png",
        alt: "Bramley Cooking Apples",
        title: "Bramley Cooking Apples",
        cardText: "",
        price: 30,
        amount: "кг."
    },
    {
        id: 4,
        img: "img/fruits/Bananas.png",
        alt: "Bananas",
        title: "Bananas",
        cardText: "",
        price: 20,
        amount: "кг."
    }
];

const catalogHtml = document.getElementById("catalog-cards-id");
catalogHtml.innerHTML = "";
for (let i = 0; i < cards.length; i++) {
    catalogHtml.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card mb-2" style="width: 100%;">
                    <img src="${cards[i].img}" class="card-img-top" alt="${cards[i].alt}">
                    <div class="card-body">
                        <h5 class="card-title">${cards[i].title}</h5>
                        <p class="card-text">${cards[i].cardText}</p>
                        <button type="button" class="btn btn-warning">В корзину</button>
                    </div>
                </div>
            </div>`;
}

