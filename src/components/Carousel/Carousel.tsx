import './Carousel.less';

import * as React from 'react';

import Button from '../../components/button/Button';
import { animTypes } from '../../utils/constants';

interface CarouselProps {
  images?: Array<string>;
  texts?: Array<string>;
}

interface CarouselState {
  visibility: Array<any>;
  current: number;
  animType: string;
}

export default class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      visibility: [],
      current: 0,
      animType: 'from-left-side'
    };
  }

  componentDidMount() {
    this.setState({
      visibility: this.props.images.map((item, i) => !i)
    });
  }

  _setState(current, animType) {
    this.setState((prevState, props) => ({
      current: current,
      visibility: prevState.visibility.map((item, i) => i === current),
      animType: animType
    }));
  }

  _prev() {
    const current = this.state.current === 0 ? this.props.images.length - 1 : this.state.current - 1;

    this._setState(current, animTypes[1]);
  }

  _next() {
    const current = this.state.current === this.props.images.length - 1 ? 0 : this.state.current + 1;

    this._setState(current, animTypes[0]);
  }

  _renderImages() {
    return this.props.images.map((image, i) => {
      return this.state.visibility[i] ? (<div key={i} className={`image-box ${this.state.animType}`} id={`image-box-${i}`}>
        <img src={image} alt=""/>
        {this.props.texts ? <span>{this.props.texts[i]}</span> : null}
      </div>) : null;
    });
  }
  
  render() {
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
        {this.props.images ? this._renderImages() : null}
      </div>
    );
  }
}
