import showScreen from './show-screen.js';
import stats from './stats.js';
import greeting from './greeting.js';
import header from './header.js';
import playerStats from './player-stats.js';

const testTask = {
    'http://placehold.it/304x415': {
            descr: `Option 1`,
            answer: `paint`
        },
    'http://placehold.it/304x425': {
            descr: `Option 2`,
            answer: `photo`
        },
    'http://placehold.it/304x435': {
            descr: `Option 3`,
            answer: `photo`
        }
}


const game3Template = (task) => ` ${header}
<section class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
        ${Object.keys(task)
            .map((it) => `<div class="game__option">
                            <img src="${it}" alt="${task[it].descr}" width="304" height="455">
                        </div>`)
            .join(``)}
    </form>
    ${playerStats}
</section>
`
const game3 = {
    // getElement: util.getElFromTemplate(`template`, game3Template),
    setListeners(stateObj) {
        const back = document.querySelector(`.back`);
        back.addEventListener(`click`, () => {
            greeting.showScreen();
        });
        
        const options = [...document.querySelectorAll(`.game__option`)];
        options.forEach( (option) => {
            option.addEventListener(`click`, (evt) => {
                let val = evt.target.src;
                stateObj[val].answer === `paint` ? stats.showScreen() : null;
            });
        });
    },
    showScreen() {
        showScreen(game3Template(testTask));
        this.setListeners(testTask);
    }
}
export default game3;