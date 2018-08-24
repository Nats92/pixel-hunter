import showScreen from './show-screen.js';
import game3 from './game-3.js';
import greeting from './greeting.js';
import header from './header.js';
import playerStats from './player-stats.js';
// import testTask from 

const testTask = {
    'http://placehold.it/705x455' : {
        descr: `Option 1`,
        answer: `photo`
    }
}

const game2Template = (task) => ` ${header}
<section class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
        ${Object.keys(task).map( (it) => 
            `<div class="game__option">
                <img src="${it}" alt="${task[it].descr}" width="705" height="455">
                <label class="game__answer  game__answer--photo">
                    <input class="visually-hidden" name="question1" type="radio" value="photo">
                    <span>Фото</span>
                </label>
                <label class="game__answer  game__answer--paint">
                    <input class="visually-hidden" name="question1" type="radio" value="paint">
                    <span>Рисунок</span>
                </label>
            </div>`)}
    </form>
    ${playerStats}
</section> `

const game2 = {
    // getElement: util.getElFromTemplate(`template`, game2Template),
    setListeners(stateObj) {
        const back = document.querySelector(`.back`);
        back.addEventListener(`click`, () => {
            greeting.showScreen();
        });
        
        const answerForm = document.querySelector(`.game__content`);
        answerForm.addEventListener(`change`, (evt) => {
            const val = evt.target.value;
            let imageSrc = document.querySelector(`.game__option img`).src;
            stateObj[imageSrc].answer === val ? game3.showScreen() : null;
        });
    },
    showScreen() {
        showScreen(game2Template(testTask));
        this.setListeners(testTask);
    }
}

export default game2;