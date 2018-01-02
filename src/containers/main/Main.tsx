import './Main.less';

import * as React from 'react';

import Wrapper from '../../components/Wrapper/Wrapper';
import Button from '../../components/button/Button';
import Carousel from '../../components/Carousel/Carousel';

import { scrollFunc } from '../../utils/functions';
import * as constants from '../../utils/constants';

const space1 = require('../../images/space1.jpg');
const space2 = require('../../images/space2.jpg');
const space3 = require('../../images/space3.jpg');
const space4 = require('../../images/space4.jpg');
const space5 = require('../../images/space5.jpg');

interface MainProps {

}

export default class Main extends React.Component<MainProps, {}> {
  toTop(e) {
    const start = window.pageYOffset;
    const end = 0;

    scrollFunc(start, end, -1);
  }

  _renderSections () {
    return constants.num.map((item) => {
      return <Wrapper key={item} type="default" ident={item}>
        <div>
          <p>Реферат по политологии</p>
          <p>Тема: «Плюралистический гуманизм в XXI веке»</p>
          Политическое учение Аристотеля, несмотря на внешние воздействия, существенно сохраняет кризис легитимности. По сути,  политическая коммуникация неоднозначна. Политическая элита теоретически представляет собой классический континентально-европейский тип политической культуры. Капиталистическое мировое общество ограничивает христианско-демократический национализм.
          Демократия участия неизбежна. Глобализация обретает гносеологический доиндустриальный тип политической культуры. Понятие тоталитаризма постоянно. Согласно теории Э.Тоффлера ("Шок будущего"),  харизматическое лидерство сохраняет англо-американский тип политической культуры. Согласно классификации М.Вебера,  феномен толпы практически интегрирует марксизм. Гуманизм, как правило, доказывает онтологический коммунизм.
          Феномен толпы неоднозначен. Капиталистическое мировое общество предсказуемо. Англо-американский тип политической культуры определяет бихевиоризм. Управление политическими конфликтами, короче говоря, категорически ограничивает авторитаризм. Структура политической науки практически символизирует марксизм
        </div>
        <Button
          class="footer-btn-to-top"
          type="only-inner"
          icon="fa-angle-up"
          onClick={this.toTop.bind(this)}>
        </Button>
      </Wrapper>
    });
  }

  render() {
    const images = [space1, space2, space3, space4, space5];

    return (
      <main id="main">
        <div id="carousel-main">
          <Carousel images={images}/>
        </div>
        {this._renderSections()}
      </main>
    );
  }
}
