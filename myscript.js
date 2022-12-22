const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navbar.classList.remove('active');
});

document.querySelectorAll('.nav-icons').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navbar.classList.remove('active');
}));

const projects = document.querySelector('.projects');
const cards = [
  {
    id: '0',
    name: 'DeskLog',
    description: 'DeskLog is an issue tracking website for small companies to log complaints, track complaints via tickers and centralize communication with customers.',
    image: 'https://picsum.photos/id/0/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: 'DeskLog',
    liveVersion: 'DeskLog',
  },
  {
    id: '1',
    name: 'Citycation App',
    description: 'Citycation is a mobile application that connects city vacationers with city based accommodation and hospitality',
    image: 'https://picsum.photos/id/43/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: 'Citycation',
    liveVersion: 'Citycation',
  },
  {
    id: '2',
    name: 'Tukab Taxi App',
    description: 'Tukab Taxi is a mobile application for tuk tuk taxi services, akin to the world renown Uber.',
    image: 'https://picsum.photos/id/45/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: 'Tukab Taxi',
    liveVersion: 'Tukab Taxi',
  },
  {
    id: '3',
    name: 'Finder Tracking App',
    description: 'Finder Tracking App is a mobile based application that syncs with tiny tracking devices attached to a users items and can help track them in the event of a loss',
    image: 'https://picsum.photos/id/26/325/252/',
    source: 'Finder Tracking App',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    liveVersion: 'Finder Tracking App',
  },
  {
    id: '4',
    name: 'Pocket Lib',
    description: 'Pocket Lib is a web and mobile based e-book reader and library',
    image: 'https://picsum.photos/id/24/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: 'Pocket Lib',
    liveVersion: 'Pocket Lib',
  },
  {
    id: '5',
    name: 'Lookr Search Engine',
    description: 'Lookr is a web and mobile based internet search engine',
    image: 'https://picsum.photos/id/20/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: 'Lookr',
    liveVersion: 'Lookr',
  },
];

for (let i = 0; i < cards.length; i += 1) {
  let eachTech = '';

  for (let j = 0; j < cards[i].technologies.length; j += 1) {
    eachTech += `<li>${cards[i].technologies[j]}</li>`;
  }

  const container = document.createElement('div');
  container.classList.add('entries');
  container.innerHTML = `
  <img class="notPopUp" src="${cards[i].image}" alt="">
    <div class="details" 
    <a href="#"><img src="images/Disabled.svg" class="forPopUp close" alt="close-icon"></a>
    <img class="forPopUp" src="${cards[i].image}" alt="">
    <h3 class="forPopUp">${cards[i].name}</h3>
    <h4 class="notPopUp">${cards[i].name}</h4>
    <ul class="list1" type="none">
      ${eachTech}
    </ul>
    <p class="forPopUp">${cards[i].description}</p>
    <div class=popup-btns>
      <button type="button" class="button-3 forPopUp">See Live</button>
      <button type="button" class="button-3 forPopUp">See Source</button>
    </div>
    <button type="button" class="button-2 notPopUp ">See Project</button>
    <div>  
  `;
  projects.appendChild(container);
}

document.querySelectorAll('.button-2').forEach((n) => n.addEventListener('click', () => {
  if (n.parentElement.classList.contains('active') === false) {
    n.parentElement.classList.add('active');
    const main = document.getElementById('main');
    const popup = document.createElement('div');
    popup.className = 'popup';
    const poparea = document.createElement('div');
    poparea.className = 'poparea';
    const clone = n.parentElement.cloneNode(true);
    poparea.appendChild(clone);
    popup.appendChild(poparea);
    main.appendChild(popup);
  }
}));