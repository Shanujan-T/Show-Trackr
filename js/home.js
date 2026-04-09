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