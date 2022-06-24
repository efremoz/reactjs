// при клике по кнопке скрипт запустит код
button.onclick = function () {
 // если фон кнопки чёрный
 if (button.style.backgroundColor == 'black') {
   // изменим его на белый, а текст сделаем чёрным
   button.style.backgroundColor = 'white';
   button.style.color = 'black';
 } else {
   // иначе сделаем фон чёрным, а текст белым
   button.style.backgroundColor = 'black';
   button.style.color = 'white';
 }
}

window.__count = 0;
function __detectInfiniteLoop(loopStart) {
    const isTimeout = (Date.now() - loopStart) > 10000;
    if (window.__count > 10e4 || isTimeout) {
        // так как в тестах могут создавать свой объект console
        window.console.error('Infinite Loop detected');

        const loopError = new Error('Infinite Loop detected');
        loopError.type = 'infinite_loop';

        window.parent.postMessage(JSON.stringify({type: 'infinite_loop'}), '*');

        throw loopError;
    }

    window.__count += 1;
};