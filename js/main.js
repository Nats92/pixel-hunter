import introMarking from './intro.js';

// const templates = [...document.querySelectorAll(`template`)];

let currScreenNumber = 0;

const clearContainer = (container) => {
    let children = container.children;
    for (let i = children.length - 1; i >= 0; i--) {
        container.removeChild(children[i]);
    }
};

const showScreen = () => {
    const main = document.querySelector(`#main`);
    clearContainer(main);
    const template = introMarking.cloneNode(true);
    main.appendChild(template);
};

const nextScreen = (cb) => {
    currScreenNumber++;
    if (currScreenNumber > templates.length - 1) {
        currScreenNumber = 0;
    }
    cb();
};

const prevScreen = (cb) => {
    currScreenNumber--;
    if (currScreenNumber < 0) {
        currScreenNumber = templates.length - 1;
    }
    cb();
};

window.addEventListener(`keydown`, (evt) => {
    if (evt.ctrlKey && evt.keyCode === 39) {
        nextScreen(showScreen);
    }
    if (evt.ctrlKey && evt.keyCode === 37) {
        prevScreen(showScreen);
    }
});

window.addEventListener(`load`, showScreen);