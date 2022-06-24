// Данные для списка
const list = [
  {
    name: 'Хлеб',
    quantity: '1 батон',
  },
  {
    name: 'Ром',
    quantity: '3 бутылки',
  },
  {
    name: 'Кока-кола',
    quantity: '3 бутылки',
  },
  {
    name: 'Туалетная бумага',
    quantity: 'Вся, что есть',
  },
];

ReactDOM.render(
  <ul>
    {list.map((item, i) => (
      <li key={i}>
        <b>{item.name}</b>
        <i>{item.quantity}</i>
      </li>
    ))}
  </ul>,
  document.querySelector('#root')
);

const comments = [
  {
    id: 1,
    author: 'Лиза',
    text: 'Все уже сдали деньги на субботник?',
  },
  {
    id: 2,
    author: 'Джеймс',
    text: 'Никто не видел мой сэндвич?',
  },
  {
    id: 3,
    author: 'Грег',
    text: 'Продам мопед',
  },
];

ReactDOM.render(
  <div>
    <h2>Сообщения</h2>

    {comments.map((message, i) => (
      // Важный атрибут: key
      <div key={message.id}>
        <h3>{message.author}</h3>
        <div>{message.text}</div>
      </div>
    ))}
  </div>,
  document.querySelector('#root 2')
);

function handleClick() {
  console.log('Не дави на меня!');
}

function handleMouseEnter() {
  console.log('Ты мне солнце заслонил!');
}

function handleMouseLeave() {
  console.log('Ну ты чего, нормально же общались!');
}

ReactDOM.render(
  <button
    onClick={handleClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    Поиграй со мной!
  </button>,
  document.querySelector('#root3')
);
