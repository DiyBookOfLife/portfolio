const dropdown = document.getElementById("topic-select");

dropdown.addEventListener("change", (e) => {
    const selectedTopic = e.target.value;

    //scroll to card section
    document.querySelector('.box-container').scrollIntoView({ behavior: 'smooth' });

    //get all cards
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        //get card topic
        const cardInner = card.querySelector('.flip-card-inner');

        //remove any previous flips
        cardInner.classList.remove('flipped');

        //flip the matching card
        if (card.dataset.topic === selectedTopic) {
            cardInner.classList.add('flipped');
        }
    
    setTimeout(() => {cardInner.classList.remove('flipped');}, 3000);
})});
