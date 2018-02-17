import './Main.less';

import * as React from 'react';

import Wrapper from '../../components/Wrapper/Wrapper';
import Carousel from '../../components/Carousel/Carousel';
import Button from '../../components/button/Button';

import * as constants from '../../utils/constants';

const space1 = require('../../images/space1.jpg');
const space2 = require('../../images/space2.jpg');
const space3 = require('../../images/space3.jpg');
const space4 = require('../../images/space4.jpg');
const space5 = require('../../images/space5.jpg');
const myImage = require('../../images/my.jpg');

interface MainProps {

}

export default class Main extends React.Component<MainProps, {}> {
  _renderFirstSection () {
    return <div className="first">
      <img src={myImage} alt="my image"/>
      <div>
        <span>ФИО:</span><span>Кузьмичев Макар Александрович</span>
      </div>
      <div>
        <span>Дата рождения:</span><span>31.08.92</span>
      </div>
      <div>
        <span>Город:</span><span>Ижевск</span>
      </div>
      <div>
        <span>Образование:</span><span>МФТИ(ГУ), бакалавр, прикладная математика и физика</span>
      </div>
      <div>
        <span>Опыт работы:</span>
        <span>
          2012-2013: Москва, БоиФармКластер, МФТИ, младший научный сотрудник <br/>
          2013-2016: Ижевск, МБОУ СОШ №58, учитель <br/>
          2015-2016: Ижевск, Competentum, разработчик алгоритмов по математике <br/>
          2016-н.в.: Ижевск, Competentum, младший программист <br/>
        </span>
      </div>
      <div>
        <span>Технологии:</span><span>HTML, CSS, JS (ES5, ES6), SVG, Canvas, jQuery, JSXGraph, React, Redux, Angular2, Webpack, Git, Jira</span>
      </div>
      <div>
        <span>О себе:</span><span>В настоящее время работаю в компании компетентум младшим программистом, занимаюсь Web-разработкой</span>
      </div>
    </div>;
  }

  _renderSecondSection () {
    const images = [space1, space2, space3, space4, space5];

    return <div>
      <div id="carousel-main">
        <Carousel images={images}/>
      </div>
    </div>;
  }

  _renderThirdSection () {
    return <div className="connect-with-me">
      <p>Связаться со мной можно через мессенджеры или с помощью формы ниже:</p>
      <div>
        <form action="/telegram" method="POST">
          <div>
            <label htmlFor="form__input">Имя</label><input id="form__input" type="text" name="name" placeholder="Имя"/>
          </div>
          <div>
            <label htmlFor="form__input">Email</label><input id="form__input" type="email" name="email" placeholder="Email"/>
          </div>
          <div>
            <textarea id="form__input form__message" name="text" placeholder="Ваше сообщение"/>
          </div>
          <div>
            <Button >Отправить</Button>
          </div>
        </form>
      </div>
    </div>;
  }

  _renderSections () {
    return constants.num.map((item, i) => {
      return <Wrapper key={item} type="default" ident={item} toTopBtn={true} header={constants.headers[i]}>
        {i === 0 ? this._renderFirstSection() : i === 1 ? this._renderSecondSection() : this._renderThirdSection()}
      </Wrapper>
    });
  }

  render() {
    return (
      <main id="main">
        {this._renderSections()}
      </main>
    );
  }
}
