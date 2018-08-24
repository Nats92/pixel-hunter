import Screen from './Screen.js';
import showScreen from './show-screen.js';

class GameScreen extends Screen {
    showScreen(stateObj) {
        showScreen(this.template(stateObj));
        this.setListeners(stateObj);
    }
}



// const START_LIVES = 3;

// const initialGame = {
//     lives: START_LIVES
// }

// const game = {
//     userName,
//     lives,
//     time,

// }