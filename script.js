const speakers = [
  {
    name: 'Gohar Someone',
    imageBg: 'media/grey-chess-bg.png',
    image: 'media/speaker-1.png',
    job: 'Winner of Gohar Gasparyan Pan-Armenian competition',
    text: 'Guest singer from Gohar Gasparyan Pan-Armenian competition',
  },
  {
    name: 'Alphayo Strange',
    imageBg: 'media/grey-chess-bg.png',
    image: 'media/speaker-2.png',
    job: 'Winner of Gohar Gasparyan Pan-Armenian competition',
    text: 'Guest singer from Gohar Gasparyan Pan-Armenian competition',
  },
  {
    name: 'Gendalf Karamaga',
    imageBg: 'media/grey-chess-bg.png',
    image: 'media/speaker-3.png',
    job: 'Winner of Gohar Gasparyan Pan-Armenian competition',
    text: 'Guest singer from Gohar Gasparyan Pan-Armenian competition',
  },
  {
    name: 'Rehema Bellweather',
    imageBg: 'media/grey-chess-bg.png',
    image: 'media/speaker-4.png',
    job: 'Winner of Gohar Gasparyan Pan-Armenian competition',
    text: 'Guest singer from Gohar Gasparyan Pan-Armenian competition',
  },
  {
    name: 'Merlin Gasparyan',
    imageBg: 'media/grey-chess-bg.png',
    image: 'media/speaker-5.png',
    job: 'Winner of Gohar Gasparyan Pan-Armenian competition',
    text: 'Guest singer from Gohar Gasparyan Pan-Armenian competition',
  },
  {
    name: 'Clifford Armenyan',
    imageBg: 'media/grey-chess-bg.png',
    image: 'media/speaker-6.png',
    job: 'Winner of Gohar Gasparyan Pan-Armenian competition',
    text: 'Guest singer from Gohar Gasparyan Pan-Armenian competition',
  },
];

const spList = document.querySelector('.speakers');
const spHeading = document.createElement('h2');
spHeading.classList.add('sp-heading');
spHeading.innerText = 'Guest Singers';
spList.appendChild(spHeading);
const spDivider = document.createElement('div');
spDivider.classList.add('sp-divider');
spList.appendChild(spDivider);
const spDiv = document.createElement('div');
spDiv.classList.add('sp-div');
spList.appendChild(spDiv);

  speakers.forEach(speaker => { // eslint-disable-line
  const spCard = document.createElement('div');
  spCard.classList.add('sp-card');
  spCard.innerHTML = `
      <div class="sp-images">
        <img class="sp-image-bg" src=${speaker.imageBg} alt="singer_image">
        <img class="sp-image" src=${speaker.image} alt="singer_image">
      </div>
      <div class="sp-details">
        <h3 class="sp-name">${speaker.name}</h3>
        <p class="sp-job">${speaker.job}</p>
        <div class="sp-divider-grey"></div>
        <p class="sp-text">${speaker.text}</p>
      </div>
    `;
  spDiv.appendChild(spCard);
});
