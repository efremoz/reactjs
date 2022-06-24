let isClicked = false; // Функция,отвечающая за отрисовку интерфейса // с учётом текущего состояния isClicked

ReactDOM.render(
  <h1>Hello, world!</h1>, //1 аргумент принимает JSX
  document.querySelector('#root1') //2 аргумент указатель на DOM-элемент - в который вставляем полученный результат
); // Переменная, отвечающая за состояние приложения

function renderAll() {
  ReactDOM.render(
    <div>
      <div id="myElement">Click me!</div>

      <div id="myAnotherElement" className={isClicked ? 'active' : ''}>
        <div id="myText">
          {isClicked ? 'It was clicked!' : 'Waiting for click...'}
        </div>
      </div>
    </div>,
    document.querySelector('#root2')
  );
} // Вызов первичной отрисовки при открытии страницы

renderAll(); // При наступлении события мы изменяем переменную состояния

// и заново вызываем отрисовку
const element = document.querySelector('#myElement');
element.addEventListener('click', () => {
  isClicked = !isClicked;
  renderAll();
});

const zebras = 'Зебры';
const leeches = 'пиявок';
const elephants = 'слонята';

ReactDOM.render(
  <div>
    <h2>Грустные факты о животных</h2>
    <p>Новорожденные {elephants} не умеют управлять хоботом.</p>
    <p>{zebras} не могут спать в одиночестве.</p>
    <p>У {leeches} 32 мозга.</p>
  </div>,
  document.querySelector('#root3')
);
