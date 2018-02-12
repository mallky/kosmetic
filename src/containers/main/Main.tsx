import './Main.less';

import * as React from 'react';

import Wrapper from '../../components/Wrapper/Wrapper';
import Carousel from '../../components/Carousel/Carousel';

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
  _renderFirstSEction () {

    return <div>
      <img src={myImage} alt="my image"/>
      <p>Тема: «Плюралистический гуманизм в XXI веке»</p>
      Политическое учение Аристотеля, несмотря на внешние воздействия, существенно сохраняет кризис легитимности. По сути,  политическая коммуникация неоднозначна. Политическая элита теоретически представляет собой классический континентально-европейский тип политической культуры. Капиталистическое мировое общество ограничивает христианско-демократический национализм.
      Демократия участия неизбежна. Глобализация обретает гносеологический доиндустриальный тип политической культуры. Понятие тоталитаризма постоянно. Согласно теории Э.Тоффлера ("Шок будущего"),  харизматическое лидерство сохраняет англо-американский тип политической культуры. Согласно классификации М.Вебера,  феномен толпы практически интегрирует марксизм. Гуманизм, как правило, доказывает онтологический коммунизм.
      Феномен толпы неоднозначен. Капиталистическое мировое общество предсказуемо. Англо-американский тип политической культуры определяет бихевиоризм. Управление политическими конфликтами, короче говоря, категорически ограничивает авторитаризм. Структура политической науки практически символизирует марксизм
    </div>;
  }

  _renderSections () {
    const images = [space1, space2, space3, space4, space5];

    return constants.num.map((item, i) => {
      return <Wrapper key={item} type="default" ident={item} toTopBtn={true} header={constants.headers[i]}>
        { i !== 1 ? this._renderFirstSEction()
        : <div id="carousel-main">
          <Carousel images={images}/>
        </div>}
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
