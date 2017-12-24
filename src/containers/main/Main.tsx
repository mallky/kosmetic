import './Main.less';

import * as React from 'react';

import Wrapper from '../../components/Wrapper/Wrapper';
import * as constants from '../../utils/constants';
import Button from '../../components/button/Button';
import { scrollFunc } from '../../utils/functions';

interface MainProps {

}

export default class Main extends React.Component<MainProps, {}> {
  toTop(e) {
    const start = e.target.getBoundingClientRect().top;
    const end = 0;
    console.log(e.target);
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
          onClick={this.toTop.bind(this)}>
          <i className="fas fa-angle-up"/>
        </Button>
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
