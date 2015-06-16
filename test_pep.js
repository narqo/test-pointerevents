var domElem = document.querySelector('.test-pointer');

domElem.addEventListener('mouseenter', makeHandler('native:'));
domElem.addEventListener('mouseleave', makeHandler('native:'));

domElem.addEventListener('pointerenter', makeHandler('pointer:'));
domElem.addEventListener('pointerleave', makeHandler('pointer:'));

function makeHandler(name) {
    return function handler(e) {
        console.log(name, e.type, e.target);
    };
}
