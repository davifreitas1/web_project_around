const imgList = [
  { src: './images/marco_zero.jpg', imgName: 'Marco Zero' },
  { src: './images/olinda.png', imgName: 'Olinda' },
  { src: './images/boa_viagem.png', imgName: 'Boa Viagem' },
  { src: './images/festa_junina.png', imgName: 'Festa Junina' },
  { src: './images/recife_antigo.png', imgName: 'Recife Antigo' },
  { src: './images/galo_da_madrugada.png', imgName: 'Galo da Madrugada' }
]

function createEleWClass(e, className) {
  const element = document.createElement(e);
  element.classList.add(className);

  return element;
}

function createInitialCards(imgList) {
  const gallery = document.getElementById('gallery');

  for (let index = 0; index < imgList.length; index++) {
    const cardDiv = createEleWClass('div', 'card');

    const cardImg = createEleWClass('div', 'card_image');
    cardImg.style.backgroundImage = `url(${imgList[index].src})`;
  
    const cardDesc = createEleWClass('div', 'card_description');

    const h2 = createEleWClass('h2', 'card_text');
    h2.innerText = imgList[index].imgName;

    const likeButton =  createEleWClass('button', 'card_like_button');
  
    cardDiv.appendChild(cardImg);
  
    cardDesc.appendChild(h2);
    cardDesc.appendChild(likeButton);
  
    cardDiv.appendChild(cardDesc);
  
    gallery.appendChild(cardDiv);
  }
}

createInitialCards(imgList)