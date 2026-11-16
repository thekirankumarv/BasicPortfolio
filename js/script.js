/*================ toggle icon navbar ================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=============== scroll sections active link ===============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        };
    });

    /*================ sticky navbar =================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*======================= remove toggle icon and navbar when click navbar Link (scroll) ===================================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*================ scroll reveal =================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*================ typed js =================*/
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'YouTuber', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*================ cursor trail =================*/
document.onmousedown = function(event) {
    var trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = event.clientX - 30 + 'px';
    trail.style.top = event.clientY - 30 + 'px';
    document.body.appendChild(trail);
  
    setTimeout(function() {
      document.body.removeChild(trail);
    }, 1000);
};  

// Background Music

document.addEventListener('DOMContentLoaded', function() {
    // Create audio element
    var audio = document.createElement('audio');
    audio.id = 'background-audio';
    audio.autoplay = true;
    audio.muted = true; // Start with audio muted
    audio.loop = true;

    // Create source element and set attributes
    var source = document.createElement('source');
    source.src = './audio/audio-bg.mp3';
    source.type = 'audio/mpeg';

    // Add source element to audio element
    audio.appendChild(source);

    // Add a fallback message if the browser doesn't support the audio element
    audio.appendChild(document.createTextNode("Your browser does not support the audio element."));

    // Append audio element to the document body or any other desired location
    document.body.appendChild(audio);

    // Play audio only if it's not muted
    audio.play().catch(function(e) {
        console.log('Audio playback failed:', e);
    });

    // Create floating button element
    var button = document.createElement('div');
    button.id = 'sound-control';
    button.className = 'floating-button';
    button.innerHTML = 'Sound&nbsp;'; // Adding non-breaking space here

    // Create span element for text
    var span = document.createElement('span');
    span.id = 'sound-text';
    span.className = 'off'; // Start with 'off' state
    span.textContent = 'Off';
    
    // Append span element to button
    button.appendChild(span);
    
    // Add event listener to button
    button.addEventListener('click', toggleSound);
    
    // Append button to the document body or any other desired location
    document.body.appendChild(button);
});

function toggleSound() {
    var audio = document.getElementById('background-audio');
    var soundText = document.getElementById('sound-text');
    if (audio.muted) {
        audio.muted = false;
        soundText.textContent = 'On';
        soundText.classList.remove('off'); 
        soundText.classList.add('on'); 
        audio.play().catch(function(e) {
            console.log('Audio playback failed:', e);
        });
    } else {
        audio.muted = true;
        soundText.textContent = 'Off';
        soundText.classList.remove('on'); 
        soundText.classList.add('off'); 
        audio.pause();
    }
}
