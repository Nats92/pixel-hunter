const intro = document.querySelector(`#intro`).content;
const greeting = document.querySelector(`#greeting`).content;
const rules = document.querySelector(`#rules`).content;
const screenWith2Pict = document.querySelector(`#game-1`).content;
const screenWith1Pict = document.querySelector(`#game-2`).content;
const screenWith3Pict = document.querySelector(`#game-3`).content;
const stats = document.querySelector(`#stats`).content;
const modalErr = document.querySelector(`#modal-error`).content; 
const modalConfirm = document.querySelector(`#modal-confirm`).content;

const templatesContents = [
    intro, 
    greeting,
    rules,
    screenWith2Pict,
    screenWith3Pict,
    screenWith1Pict,
    stats,
    modalErr,
    modalConfirm
];

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
    const template = templatesContents[currScreenNumber].cloneNode(true);
    main.appendChild(template);
};

const nextScreen = (cb) => {
    currScreenNumber++;
    if (currScreenNumber > templatesContents.length - 1) {
        currScreenNumber = 0;
    }
    cb();
};

const prevScreen = (cb) => {
    currScreenNumber--;
    if (currScreenNumber < 0) {
        currScreenNumber = templatesContents.length - 1;
    }
    cb();
};

window.addEventListener(`keydown`, function(evt) {
    if (evt.ctrlKey && evt.keyCode === 39) {
        nextScreen(showScreen);
    }
    if (evt.ctrlKey && evt.keyCode === 37) {
        prevScreen(showScreen);
    }
});

window.addEventListener(`load`, showScreen);