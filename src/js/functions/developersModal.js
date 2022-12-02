<<<<<<< Updated upstream
import Data from '../../../developers.json';
const developers = Data.developers;
=======
import { appendDevelopersMarkup } from "../components/developers-cards.js";
>>>>>>> Stashed changes

const refs = {
  modalOpen: document.querySelector('#open-modal'),
  modalClose: document.querySelector('#close-modal'),
  modal: document.querySelector('#modal'),
  backdrop: document.querySelector('#backdrop'),
  list: document.querySelector('.dev-modal__list'),
};

refs.modalOpen.addEventListener('click', onOpenModal);
refs.backdrop.addEventListener('click', onCloseModal);


function onOpenModal() {
  toggleModal();
<<<<<<< Updated upstream
  appendDevelopersMarkup();
}

function appendDevelopersMarkup() {
  const markup = developers
    .map(({ name, position, git, photo300, photo600, linkedin }) => {
      return `<li class="dev-modal__card">
    <picture class="dev-modal__picture">
      <source srcset="${photo300} 1x, ${photo600} 2x">
    </picture>

    <div class="dev-modal__wrapper">
        <h2 class="dev-modal__name">${name}</h2>
        <p class="dev-modal__position">${position}</p>
        <ul class="dev-social-network">
            <li class="dev-social-network__item">
                <a class="dev-social-network__link" href="${git}">
                    <svg class="dev-social-network__icon" width="14px" height="14px">
                        <use href="./images/sprite.svg#icon-github">
                        </use>
                    </svg>
                </a>
            </li>
            <li class="dev-social-network__item">
                <a class="dev-social-network__link" href="${linkedin}">
                    <svg class="dev-social-network__icon" width="14px" height="14px">
                        <use href="./images/sprite.svg#icon-linkedin">
                        </use>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</li>`;
    })
    .join('');
  refs.list.insertAdjacentHTML('beforeend', markup);
=======
  const renderedCards = appendDevelopersMarkup()
  refs.list.innerHTML = renderedCards;
>>>>>>> Stashed changes
}

function onCloseModal() {
  toggleModal();
  refs.list.innerHTML = ""
}

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
