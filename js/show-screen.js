export default (template) => {
    const main = document.querySelector(`#main`);
    main.innerHTML = ``;
    main.innerHTML = template;
};