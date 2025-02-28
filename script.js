document.addEventListener('DOMContentLoaded', () => {
    const cardList = document.getElementById('cardList');
    const addCardBtn = document.getElementById('addCardBtn');
    const deleteAllBtn = document.getElementById('deleteAllBtn');
    const cardNameInput = document.getElementById('cardName');
    const cardDescInput = document.getElementById('cardDesc');

    // טעינת קלפים מ-LocalStorage בעת טעינה
    loadCards();

    addCardBtn.addEventListener('click', () => {
        const name = cardNameInput.value.trim();
        const desc = cardDescInput.value.trim();
        if (name === '') return; // לא מוסיף קלף ריק

        const card = { name, desc };
        addCardToDOM(card);
        saveCard(card);
        cardNameInput.value = '';
        cardDescInput.value = '';
    });

    deleteAllBtn.addEventListener('click', () => {
        cardList.innerHTML = '';
        localStorage.removeItem('cards');
    });

    function addCardToDOM(card) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${card.name}</strong><br>${card.desc}`;
        cardList.appendChild(li);
    }

    function saveCard(card) {
        let cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards.push(card);
        localStorage.setItem('cards', JSON.stringify(cards));
    }

    function loadCards() {
        const cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards.forEach(card => addCardToDOM(card));
    }
});