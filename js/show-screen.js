import util from './util.js';

export default (template) => {
    const main = document.querySelector(`#main`);
    util.clearContainer(main);
    main.innerHTML = template;
};