// Hamburger Menu Activator for Mobile Version

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});

document.querySelectorAll('.nav-icons').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navbar.classList.remove('active');
}));

const projects = document.querySelector('.projects');
const cards = [
  {
    name: 'DeskLog',
    description: 'DeskLog is an issue tracking website for small companies to log complaints, track complaints via tickers and centralize communication with customers.',
    image: 'https://picsum.photos/id/0/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: 'DeskLog',
    liveVersion: 'DeskLog',
  },
  {
    name: 'Citycation App',
    description: 'Citycation is a mobile application that connects city vacationers with city based accommodation and hospitality',
    image: 'https://picsum.photos/id/43/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: 'Citycation',
    liveVersion: 'Citycation',
  },
  {
    name: 'Tukab Taxi App',
    description: 'Tukab Taxi is a mobile application for tuk tuk taxi services, akin to the world renown Uber.',
    image: 'https://picsum.photos/id/45/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: 'Tukab Taxi',
    liveVersion: 'Tukab Taxi',
  },
  {
    name: 'Finder Tracking App',
    description: 'Finder Tracking App is a mobile based application that syncs with tiny tracking devices attached to a users items and can help track them in the event of a loss',
    image: 'https://picsum.photos/id/26/325/252/',
    source: 'Finder Tracking App',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    liveVersion: 'Finder Tracking App',
  },
  {
    name: 'Pocket Lib',
    description: 'Pocket Lib is a web and mobile based e-book reader and library',
    image: 'https://picsum.photos/id/24/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: 'Pocket Lib',
    liveVersion: 'Pocket Lib',
  },
  {
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
  <img src="${cards[i].image}" alt="">
  <div class="description">
    <h4>${cards[i].name}</h4>
    <ul class="list1" type="none">
      ${eachTech}
    </ul>
    <button type="button" class="button-2">See Project</button>
  </div>
  `;
  projects.appendChild(container);
}

// const body = document.getElementsByTagName('body');
// const button2 = document.getElementsByClassName('.button-2');
// button2.addEventListener('click', () => {
//   const window = document.createElement('div');
//   const container = document.createElement('div');
//   container.innerHTML =  `
//   <a class="close-btn" href="#"><img src="images/close-icon.svg" alt="close-icon"></a>
//   <img src="" alt="">
//   <h3></h3>
//   <ul class="list1" type="none">
//     <li><div>Ruby on rails</div></li>
//     <li><div>css</div></li>
//     <li><div>JavScript</div></li>
//     <li><div>html</div></li>
//   </ul>
//   <p></p>
//   <div>
//     <button type="button" class="button-2">See Project</button>
//     <button type="button" class="button-2">See Project</button>
//   </div>
//   `
//   window.appendchild(container);
//   body.appendchild(window);
// })
