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

function createCard(img) {
  const cardDiv = createEleWClass('div', 'card');
  const cardImg = createEleWClass('div', 'card_image');
  cardImg.style.backgroundImage = `url(${img.src})`;

  const cardDesc = createEleWClass('div', 'card_description');

  const h2 = createEleWClass('h2', 'card_text');
  h2.innerText = img.imgName;

  const likeButton =  createEleWClass('button', 'card_like_button');

  cardDiv.appendChild(cardImg);

  cardDesc.appendChild(h2);
  cardDesc.appendChild(likeButton);

  cardDiv.appendChild(cardDesc);
  return cardDiv
}

function createInitialCards(imgList) {
  const gallery = document.getElementById('gallery');

  imgList.forEach((img) => {
    const cardDiv = createCard(img);
    gallery.appendChild(cardDiv);
  });
}

function addPopupVisible(event) {
  const popup = document.querySelectorAll('.popup');
  let popupNumber;
  if (event.target.id === 'profile_edit_button') {
    popupNumber = 0;
  }
  popup[popupNumber].classList.add('popup_visible');
}

function removePopupVisible() {
  const popup = document.querySelector('.popup_visible');
  popup.classList.remove('popup_visible');
}

function changeNameAndRole() {
  const inputName = document.getElementById('edit_name');
  const inputRole = document.getElementById('edit_role');
  const profileName = document.getElementById('profile_name');
  const profileRole = document.getElementById('profile_role');

  profileName.innerText = inputName.value;
  profileRole.innerText = inputRole.value;

  removePopupVisible();
}

createInitialCards(imgList);
document.getElementById('profile_edit_button').addEventListener('click', addPopupVisible);
document.querySelectorAll('.close_win_button').forEach((button) => {
  button.addEventListener('click', removePopupVisible);
});
document.getElementById('save_edit_button').addEventListener('click', changeNameAndRole);