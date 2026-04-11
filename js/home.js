    // Letter Filter

function letterfilter(letter) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){
        const title = card.querySelector("h5").textContent.trim().toUpperCase();
        const first = title[0];

        if (letter === "0-9") {
            if(first >= '0' && first <= '9') {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
        else {
            if(first === letter) {
                card.style.display="block";
            } else {
                card.style.display = "none";
            }
        }
        
    });
}


//   Category Filter

function categoryfilter(category) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        let dataCategory = card.getAttribute("data-category").toLowerCase();
        let categorylist = dataCategory.split(" ");

        let found = false;

        for (let i = 0; i < categorylist.length; i++) {
            if (categorylist[i] === category.toLowerCase()) {
                found = true;
                break;
            }
        }

        if (found) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
