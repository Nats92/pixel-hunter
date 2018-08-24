import game2 from './game-2.js';
import showScreen from './show-screen.js';
import greeting from './greeting.js';
import header from './header.js';
import playerStats from './player-stats.js';
// import testTask from './testTask.js';

const taskExample = {
    'https://k42.kn3.net/CF42609C8.jpg' : {
        descr: `Option 1`,
        answer: `paint`
    },
    'http://i.imgur.com/1KegWPz.jpg' : {
        descr: `Option 2`,
        answer: `photo`
    }
}

const game1Template = (tasks) => `${header}
<section class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
        ${Object.keys(tasks)
            .map((it, i) => `<div class="game__option">
                    <img src="${it}" alt="${tasks[it].descr}" width="468" height="458">
                    <label class="game__answer game__answer--photo">
                        <input class="visually-hidden" name="question${i+1}" type="radio" value="photo">
                        <span>Фото</span>
                    </label>
                    <label class="game__answer game__answer--paint">
                        <input class="visually-hidden" name="question${i+1}" type="radio" value="paint">
                        <span>Рисунок</span>
                    </label>
                </div>`)
            .join(``)}
    </form>
    ${playerStats}
</section>`;

const game1 = {
    setListeners(stateObj) {
        const back = document.querySelector(`.back`);
        back.addEventListener(`click`, () => {
            greeting.showScreen();
        });
        
        const gameContentForm = document.querySelector(`.game__content`);
        const question1 = gameContentForm.elements[`question1`];
        const question2 = gameContentForm.elements[`question2`];
        const data = {};

        gameContentForm.addEventListener(`change`, (evt) => {
            const optionEl = evt.path.filter( (it) => { return it.classList !== undefined})
            .filter((it) => {return it.classList.contains(`game__option`)}); 
            const children = optionEl[0].children;
            for (let i = 0; i < children.length; i++) {
                if (children[i].tagName === `IMG`) {
                    data[children[i].src] = evt.target.value;
                    break;
                }
            }
            const dataKeys = Object.keys(data);
            
            const filtered = dataKeys.filter( (it) => {
                return stateObj[it].answer === data[it];
            }); 

            if (filtered.length === 2) {
                game2.showScreen();
            }
        })
    },
    showScreen() {
        showScreen(game1Template(taskExample));
        this.setListeners(taskExample);
    }
}

export default game1;


  