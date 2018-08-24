import showScreen from './show-screen.js';

export default class Screen {
    constructor(templateStr) {
        this.template = templateStr
    }

    setListeners() {  }

    backToScreenListener(screen) {
        const back = document.querySelector(`.back`);
        back.addEventListener(`click`, () => {
            screen.showScreen();
        });
    }

    showScreen(stateObj) { 
        if (stateObj) {
            showScreen(this.template(stateObj));
            this.setListeners(stateObj);
        } else {
            showScreen(this.template);
            this.setListeners();  
        }
    }
}