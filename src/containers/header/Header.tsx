import './Header.less';

import * as React from 'react';
import { connect, Dispatch, DispatchProp } from 'react-redux';

import Button from './../../components/button/Button';

import { setSection } from '../../redux/application';
import { IStore } from './../../store';

import nails from 'nails.jpg';

interface HeaderProps extends DispatchProp<IStore>, React.HTMLProps<HTMLAllCollection> {
    section?: string;
}

const TAB_LIST = ['главная', 'услуги и цены', 'обучение', 'магазин', 'галерея работ', 'контакты'];

class Header extends React.Component<HeaderProps, {}> {
    handlerClick(event: any): void {
        const { dispatch } = this.props;
        const value = event.target.textContent;

        dispatch(setSection(value));
    }
    
    renderTabList(): Array<any> {
        return TAB_LIST.map((list) => {
            return <Button
              key={list}
              type='default'
              onClick={this.handlerClick.bind(this)}>
                {list}
            </Button>;
        });
    }
    
    render() {
        return (
            <header>
                <img src={nails} alt="nails"/>
                {this.renderTabList()}
            </header>
        );
    }
}

const mapStateToProps = (state: IStore, ownProps: HeaderProps) => ({
    section: state.application.section
});

export default connect<{}, {}, HeaderProps>(mapStateToProps)(Header);