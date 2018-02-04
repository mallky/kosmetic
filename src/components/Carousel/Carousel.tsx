import './Carousel.less';

import * as React from 'react';

import Button from '../../components/button/Button';
import { animTypes, DELAY_TIME } from '../../utils/constants';

interface CarouselProps {
  images?: Array<string>;
  texts?: Array<string>;
}

interface CarouselState {
  current: number;
  animType: string;
}

export default class Carousel extends React.Component<CarouselProps, CarouselState> {
  timer: any;

  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      current: 0,
      animType: animTypes[0],
    };
  }

  componentDidMount() {
    this._startTimer(animTypes[0]);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _setState(current, animType) {
    this.setState((prevState, props) => ({
      current: current,
      animType: animType
    }));
  }

  _startTimer(animType) {
    clearInterval(this.timer);

    this.timer = setInterval(() => {
      this.setState((prevState, props) => ({
        current: this.props.images.length - 1 !== prevState.current ? prevState.current + 1 : 0,
        animType: animType
      }));
    }, DELAY_TIME);
  }
  
  _prev() {
    const current: number = this.state.current === 0 ? this.props.images.length - 1 : this.state.current - 1;

    this._setState(current, animTypes[1]);
    this._startTimer(animTypes[1]);
  }

  _next() {
    const current: number = this.state.current === this.props.images.length - 1 ? 0 : this.state.current + 1;

    this._setState(current, animTypes[0]);
    this._startTimer(animTypes[0]);
  }

  _onRadioChange(e: any) {
    const currentVal: number = +e.target.value;

    this._setState(currentVal, animTypes[2]);
    this._startTimer(animTypes[2]);
  }

  _renderImages() {
    return this.props.images.map((image, i) => {
      return this.state.current === i ? (<div key={i} className={`image-box ${this.state.animType}`} id={`image-box-${i}`}>
        <img src={image} alt=""/>
        {this.props.texts ? <span>{this.props.texts[i]}</span> : null}
      </div>) : null;
    });
  }

  _renderRadioButtons(name) {
    return this.props.images.map((image, i) => {
      return <div key={i}>
        <input
          type="radio"
          id={`${image}_${i}`}
          name={name} value={i}
          onChange={this._onRadioChange.bind(this)}
          checked={this.state.current === i}/>
        <label htmlFor={`${image}_${i}`}/>
      </div>;
    });
  }

  render() {
    const radioName: string = 'carousel-radio';

    return (
      <div className="carousel">
        <div className="carousel-navigation">
          <Button
            class="footer-btn-to-top"
            type="only-inner"
            icon="fa-chevron-left"
            onClick={this._prev.bind(this)}/>
          <Button
            class="footer-btn-to-top"
            type="only-inner"
            icon="fa-chevron-right"
            onClick={this._next.bind(this)}/>
        </div>
        <div className="image-wrap-carousel">
          {this.props.images ? this._renderImages() : null}
        </div>
        <div className="carousel-radio-box">
          {this._renderRadioButtons(radioName)}
        </div>
      </div>
    );
  }
}
