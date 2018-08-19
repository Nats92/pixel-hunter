import util from './util.js';
import greeting from './greeting.js';
import showScreen from './show-screen.js';

const introTemplate = `
<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>
`

const intro = {
    // getElement: util.getElFromTemplate(introTemplate),
    setListeners: () => {
        const asterisk = document.querySelector(`.intro__asterisk`);
        asterisk.addEventListener(`click`, greeting.showScreen);
    },
    showScreen: () => {
        showScreen(introTemplate);
        intro.setListeners();
    }
}

export default intro;
