const playerStats = [
    `wrong`,
    `slow`,
    `fast`,
    `correct`,
    `unknown`,
    `unknown`,
    `unknown`,
    `unknown`,
    `unknown`,
    `unknown`
];

const statsTemplate = (statistics) => `<ul class="stats">
    ${statistics
        .map((it) => `<li class="stats__result stats__result--${it}"></li>`)
        .join(``)}  
</ul>`
  
export default statsTemplate(playerStats);

