// Objeto que define el conjunto de cartas por cada paquete (cada carta tiene un identificador único)
const decksData = {
    '1': [
      { id: 1, img: 'cards/deck1-card1.png', name: '' },
      { id: 2, img: 'cards/deck1-card2.png', name: '' },
      { id: 3, img: 'cards/deck1-card3.png', name: '' },
      { id: 4, img: 'cards/deck1-card4.png', name: '' },
      { id: 5, img: 'cards/deck1-card5.png', name: '' },
      { id: 6, img: 'cards/deck1-card6.png', name: '' },
      { id: 7, img: 'cards/deck1-card7.png', name: '' },
      { id: 8, img: 'cards/deck1-card8.png', name: '' },
      { id: 9, img: 'cards/deck1-card9.png', name: '' },
      { id: 10, img: 'cards/deck1-card10.png', name: '' },
      { id: 11, img: 'cards/deck1-card11.png', name: '' },
      { id: 12, img: 'cards/deck1-card12.png', name: '' },
      { id: 13, img: 'cards/deck1-card13.png', name: '' },
      { id: 14, img: 'cards/deck1-card14.png', name: '' },
      { id: 15, img: 'cards/deck1-card15.png', name: '' },
      { id: 16, img: 'cards/deck1-card16.png', name: '' },
      { id: 17, img: 'cards/deck1-card17.png', name: '' },
      { id: 18, img: 'cards/deck1-card18.png', name: '' },
      { id: 19, img: 'cards/deck1-card19.png', name: '' },
      { id: 20, img: 'cards/deck1-card20.png', name: '' }
    ],
    '2': [
      { id: 1, img: 'cards/deck2-card1.png', name: '' },
      { id: 2, img: 'cards/deck2-card2.png', name: '' },
      { id: 3, img: 'cards/deck2-card3.png', name: '' },
      { id: 4, img: 'cards/deck2-card4.png', name: '' },
      { id: 5, img: 'cards/deck2-card5.png', name: '' },
      { id: 6, img: 'cards/deck2-card6.png', name: '' },
      { id: 7, img: 'cards/deck2-card7.png', name: '' },
      { id: 8, img: 'cards/deck2-card8.png', name: '' },
      { id: 9, img: 'cards/deck2-card9.png', name: '' },
      { id: 10, img: 'cards/deck2-card10.png', name: '' },
      { id: 11, img: 'cards/deck2-card11.png', name: '' },
      { id: 12, img: 'cards/deck2-card12.png', name: '' },
      { id: 13, img: 'cards/deck2-card13.png', name: '' },
      { id: 14, img: 'cards/deck2-card14.png', name: '' },
      { id: 15, img: 'cards/deck2-card15.png', name: '' }
    ],
    '3': [
    { id: 1, img: 'cards/deck3-card1.png', name: '' },
      { id: 2, img: 'cards/deck3-card2.png', name: '' },
      { id: 3, img: 'cards/deck3-card3.png', name: '' },
      { id: 4, img: 'cards/deck3-card4.png', name: '' },
      { id: 5, img: 'cards/deck3-card5.png', name: '' },
      { id: 6, img: 'cards/deck3-card6.png', name: '' },
      { id: 7, img: 'cards/deck3-card7.png', name: '' },
      { id: 8, img: 'cards/deck3-card8.png', name: '' },
      { id: 9, img: 'cards/deck3-card9.png', name: '' },
      { id: 10, img: 'cards/deck3-card10.png', name: '' },
      { id: 11, img: 'cards/deck3-card11.png', name: '' },
      { id: 12, img: 'cards/deck3-card12.png', name: '' },
      { id: 13, img: 'cards/deck3-card13.png', name: '' },
      { id: 14, img: 'cards/deck3-card14.png', name: '' },
      { id: 15, img: 'cards/deck3-card15.png', name: '' },
      { id: 16, img: 'cards/deck3-card16.png', name: '' },
      { id: 17, img: 'cards/deck3-card17.png', name: '' },
      { id: 18, img: 'cards/deck3-card18.png', name: '' },
      { id: 19, img: 'cards/deck3-card19.png', name: '' }
      
    ],
    '4': [
    { id: 1, img: 'cards/deck4-card1.png', name: '' },
      { id: 2, img: 'cards/deck4-card2.png', name: '' },
      { id: 3, img: 'cards/deck4-card3.png', name: '' },
      { id: 4, img: 'cards/deck4-card4.png', name: '' },
      { id: 5, img: 'cards/deck4-card5.png', name: '' },
      { id: 6, img: 'cards/deck4-card6.png', name: '' },
      { id: 7, img: 'cards/deck4-card7.png', name: '' },
      { id: 8, img: 'cards/deck4-card8.png', name: '' },
      { id: 9, img: 'cards/deck4-card9.png', name: '' },
      { id: 10, img: 'cards/deck4-card10.png', name: '' },
      { id: 11, img: 'cards/deck4-card11.png', name: '' },
      { id: 12, img: 'cards/deck4-card12.png', name: '' },
      { id: 13, img: 'cards/deck4-card13.png', name: '' },
      { id: 14, img: 'cards/deck4-card14.png', name: '' },
      { id: 15, img: 'cards/deck4-card15.png', name: '' },
      { id: 16, img: 'cards/deck4-card16.png', name: '' },
      { id: 17, img: 'cards/deck4-card17.png', name: '' },
      { id: 18, img: 'cards/deck4-card18.png', name: '' },
      { id: 19, img: 'cards/deck4-card19.png', name: '' },
      { id: 20, img: 'cards/deck4-card20.png', name: '' },
      { id: 21, img: 'cards/deck4-card21.png', name: '' },
      { id: 22, img: 'cards/deck4-card22.png', name: '' },
      { id: 23, img: 'cards/deck4-card23.png', name: '' }
    ],
    '5': [
      { id: 1, img: 'cards/deck5-card1.png', name: '' },
      { id: 2, img: 'cards/deck5-card2.png', name: '' },
      { id: 3, img: 'cards/deck5-card3.png', name: '' }
    ]
  };

  const decksContainer = document.getElementById('decksContainer');
  const expandedDeck = document.getElementById('expandedDeck');
  const cardsContainer = document.getElementById('cardsContainer');
  const closeBtn = document.getElementById('closeBtn');
  const cardModal = document.getElementById('cardModal');
  const bmenu = document.getElementById('bottom-menu');

  // Función que genera las cartas del paquete seleccionado con animación
  function showCardsForDeck(deckNumber) {
    // Se limpia el contenedor de cartas
    cardsContainer.innerHTML = '';
    // Se obtienen los datos específicos del paquete
    const deckCards = decksData[deckNumber] || [];
    deckCards.forEach((cardData, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      // Se asigna la animación de desplegarse con un delay progresivo
      card.style.animation = 'spreadCards 0.5s ease forwards';
      card.style.animationDelay = `${index * 0.05}s`;

      // Se crea la imagen de la carta
      const img = document.createElement('img');
      img.src = cardData.img;
      img.alt = cardData.name;
      card.appendChild(img);
      
      // Añadir listener para ampliar la carta con modal
      card.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevenir la propagación al contenedor
        showModal(cardData.img, cardData.name);
      });

      cardsContainer.appendChild(card);
    });
  }

  // Mostrar modal con la carta ampliada
  function showModal(imgSrc, cardName) {
    cardModal.innerHTML = ''; // Limpiar contenido previo
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-card');
    const modalImg = document.createElement('img');
    modalImg.src = imgSrc;
    modalImg.alt = cardName;
    modalContent.appendChild(modalImg);
    cardModal.appendChild(modalContent);
    cardModal.style.display = 'flex';
  }
  
  // Cerrar modal al hacer click fuera de la carta ampliada
  cardModal.addEventListener('click', function(e) {
    // Si el clic se hace justo en el overlay (no en la imagen)
    if (e.target === cardModal) {
      cardModal.style.display = 'none';
    }
  });

  // Se asigna el evento click a cada paquete para mostrar las cartas correspondientes
  document.querySelectorAll('.deck').forEach(deck => {
    deck.addEventListener('click', function() {
      const deckNumber = this.getAttribute('data-deck');
      showCardsForDeck(deckNumber);
      decksContainer.classList.add('hidden'); // Se oculta la vista de paquetes
      expandedDeck.style.display = 'flex';      // Se muestra la vista expandida
      bmenu.classList.add('hidden');
    });
  });

  // Evento para cerrar la vista de cartas y volver al listado de paquetes
  closeBtn.addEventListener('click', function() {
    expandedDeck.style.display = 'none';
    decksContainer.classList.remove('hidden');
    bmenu.classList.remove('hidden');
  });

  // Mostrar/Ocultar el título de cada paquete según el hover.
  Array.from(decksContainer.children).forEach(child => {
    child.addEventListener("mouseover", (e) => {
      // Se busca el elemento que contiene el título dentro del paquete
      const deckTitle = e.currentTarget.querySelector('.deck-title');
      if (deckTitle) {
        deckTitle.classList.remove("hidden");
      }
    });
    child.addEventListener("mouseout", (e) => {
      const deckTitle = e.currentTarget.querySelector('.deck-title');
      if (deckTitle) {
        deckTitle.classList.add("hidden");
      }
    });
  });