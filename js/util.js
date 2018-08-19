
export default {
    // getElFromTemplate: (template) => {
    //     const container = document.createElement(`template`);
    //     container.innerHTML = template;
    //     return container.content;
    // },
    clearContainer: (container) => {
        let children = container.children;
        for (let i = children.length - 1; i >= 0; i--) {
            container.removeChild(children[i]);
        }
    }
}
