import Screen from './Screen.js';
import greeting from './greeting.js';

class Intro extends Screen {
    constructor(template) {
        super(template);
    }

    setListeners() {
        const asterisk = document.querySelector(`.intro__asterisk`);
        asterisk.addEventListener(`click`, () => {
            greeting.showScreen();
        });
    }
}
const introTemplate = `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>`

export default new Intro(introTemplate);
