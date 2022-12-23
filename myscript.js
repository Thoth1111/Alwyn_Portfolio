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
    source: '#',
    liveVersion: '#',
  },
  {
    name: 'Citycation App',
    description: 'Citycation is a mobile application that connects city vacationers with city based accommodation and hospitality',
    image: 'https://picsum.photos/id/43/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: '#',
    liveVersion: '#',
  },
  {
    name: 'Tukab Taxi App',
    description: 'Tukab Taxi is a mobile application for tuk tuk taxi services, akin to the world renown Uber.',
    image: 'https://picsum.photos/id/45/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: '#',
    liveVersion: '#',
  },
  {
    name: 'Tracker App',
    description: 'Tracker App is a mobile based application that syncs with tiny tracking devices attached to a users items and can help track them in the event of a loss',
    image: 'https://picsum.photos/id/26/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: '#',
    liveVersion: '#',
  },
  {
    name: 'Pocket Library App',
    description: 'Pocket Library app is a web and mobile based e-book reader and library',
    image: 'https://picsum.photos/id/24/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: '#',
    liveVersion: '#',
  },
  {
    name: 'Lookr Search Engine',
    description: 'Lookr is a web and mobile based internet search engine',
    image: 'https://picsum.photos/id/20/325/252/',
    technologies: ['Ruby on rails', 'css', 'Javscript', 'html'],
    source: '#',
    liveVersion: '#',
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
    <img class="forPopUp" id="pop-image" src="${cards[i].image}" alt="">
    <h3 class="forPopUp">${cards[i].name}</h3>
    <h4 class="notPopUp">${cards[i].name}</h4>
    <ul class="list1" type="none">
      ${eachTech}
    </ul>
    <p class="forPopUp">${cards[i].description}</p>
    <div class=popup-btns>
      <button type="button" class="button-3 forPopUp">See Live  <img class="pop-icons" src="images/see-live-icon.svg"></button>
      <button type="button" class="button-3 forPopUp">See Source  <img class="pop-icons" src="images/Vector.svg"></button>
    </div>
    <button type="button" class="button-2 notPopUp ">See Project</button>
    <div>  
  `;
  projects.appendChild(container);
}

document.querySelectorAll('.button-2').forEach((n) => n.addEventListener('click', () => {
  const main = document.getElementById('main');
  const popup = document.createElement('div');
  popup.className = 'popup';
  const poparea = document.createElement('div');
  poparea.className = 'poparea';
  const clone = n.parentElement.cloneNode(true);
  poparea.appendChild(clone);
  popup.appendChild(poparea);
  main.appendChild(popup);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    popup.style.display = 'none';
    main.removeChild(popup);
  });
}));

const email = document.getElementById('address');
const form = document.getElementById('form-entries');
const feedback = document.querySelector('.submission-feedback');

form.addEventListener('change', (e) => {
  e.preventDefault();
  email.classList.remove('error');
  feedback.classList.remove('error');
  feedback.style.display = 'none';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    email.classList.add('error');
    feedback.innerHTML = 'Invalid input. Please type your email in lowercase';
    feedback.style.display = 'block';
    feedback.classList.add('error');
  } else {
    feedback.style.display = 'block';
    form.submit();
  }
});

const inputs = document.querySelectorAll('.fill-area');
const dataInput = {
  fname: '',
  lname: '',
  email: '',
  message: '',
};
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    dataInput[input.fname] = input.value;
    dataInput[input.lname] = input.value;
    dataInput[input.email] = input.value;
    dataInput[input.message] = input.value;
    localStorage.setItem('grouped', JSON.stringify(dataInput));
  });
});
const archived = JSON.parse(localStorage.getItem('grouped'));
if (archived) {
  inputs.forEach((element) => {
    element.value = archived[element.name];
  });
}