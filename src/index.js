import './styles.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    once: true
});

const HTML = document.querySelector('html');
const HERO_BLOCK = document.getElementById('hero');
const HERO_CONTENT = document.getElementById('hero-content');
const PARALLAX_IMAGES = document.querySelectorAll('.hero__parallax-bg');

window.addEventListener('scroll', () => {
    const htmlScrollTop = HTML.scrollTop;

    const animationStartTrigger = HERO_BLOCK.offsetTop;
    const animationDurationDistance = HERO_BLOCK.offsetHeight;
    const animationEndTrigger = animationStartTrigger + animationDurationDistance;

    if (htmlScrollTop >= animationStartTrigger && htmlScrollTop <= animationEndTrigger) {
        const multiplier = (htmlScrollTop / animationDurationDistance);

        PARALLAX_IMAGES[0].style.transform = `translate3d(0px, -${multiplier * 60}%, 0px)`;
        PARALLAX_IMAGES[1].style.transform = `translate3d(0px, -${multiplier * 30}%, 0px)`;
        PARALLAX_IMAGES[2].style.transform = `translate3d(0px, -${multiplier * 10}%, 0px)`;

        HERO_CONTENT.style.opacity = 1 - (htmlScrollTop / animationDurationDistance);
        HERO_CONTENT.style.transform = `translate3d(0px, -${multiplier * 30}%, 0px)`;
    }
}, { passive: true });
