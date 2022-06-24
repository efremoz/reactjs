// Классовый компонент User
class User extends React.Component {
  constructor(props) {
    super(props);

    // Начальные значения внутреннего состояния
    this.state = {
      rating: 0,
    };
  }

  /*
   * Обработчики событий: изменяют внутреннее состояние
   */
  handleLike = () => {
    this.setState({ rating: 1 });
  };

  handleDislike = () => {
    this.setState({ rating: -1 });
  };

  // JSX-структура компонента
  render() {
    return (
      <div class="user">
        <img
          src={`https://code.s3.yandex.net/web-code/react/${this.props.id}.png`}
          width="75"
        />
        <br />
        <b>{this.props.name}</b>
        <div className="rating">
          <button onClick={this.handleLike} disabled={this.state.rating > 0}>
            👍
          </button>
          {this.state.rating}
          <button onClick={this.handleDislike} disabled={this.state.rating < 0}>
            👎
          </button>
        </div>
      </div>
    );
  }
}

// Основной код приложения
ReactDOM.render(
  <>
    <h2>Мои воображаемые друзья:</h2>
    <div class="row">
      <User id="1" name="Gregory" />
      <User id="2" name="James" />
      <User id="3" name="Allison" />
    </div>
  </>,
  document.querySelector('#root')
);

//     let isClicked = false;
//     function renderAll() {
//      ReactDOM.render((
//     <div>
//         <div id="myElement">Click me!</div>

//         <div id="myAnotherElement" className={isClicked ? 'active' : ''}>
//             <div id="myText">
//                 {isClicked ? 'It was clicked!' : 'Waiting for click...'}
//             </div>
//         </div>
//     </div>
//     ), document.querySelector('#root'));
//    }

//     renderAll();

//     const element = document.querySelector('#myElement');

//     element.addEventListener('click', () => {
//      isClicked = true;
//      renderAll();
//     })
