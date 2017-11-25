import * as React from 'react';
import { connect, Dispatch, DispatchProp } from 'react-redux';
import { IStore } from '../store';
import { setSection } from '../redux/application';
/**
 * Наследование от DispatchProp указывает, что метод dispatch ожидается
 * в свойствах компонента. Это свойство добавляет connect, вызванный с одним
 * аргументом (без mapDispatchToProps)
 */
interface TabListProps extends DispatchProp<IStore>, React.HTMLProps<HTMLAllCollection> {
    section?: string;
}

class TabList extends React.Component<TabListProps, {}> {
    handleClick = (event: any) => {
        const { dispatch } = this.props;
        const value = event.target.textContent;
        /**
         * Любой неверный аргумент в set или dispatch будет
         * безжалостно подсвечен красненьким.
         */
        dispatch(setSection(value));
    };

    render() {
console.log(this.props);
        return (
            <div>
                <ul onClick={this.handleClick}>
                    <li>List</li>
                    <li>item</li>
                    <li>choose</li>
                </ul>
            </div>
        );
    }
}

/**
 * Стандартная сигнатура mapStateToProps, и благодаря (в очередной раз)
 * интерфейсам мы пользуемся автоподбором всех свойств аргументов
 */
const mapStateToProps = (state: IStore, ownProps: TabListProps) => ({
    section: state.application.section
});

/**
 * Сигнатура mapDispatchToProps:
 * (dispatch: Dispatch<IStore>, ownProps: FieldProps) => ({ ... })
 */

/**
 * connect имеет сложную сигнатура, точнее более 10 сигнатур на
 * все случаи жизни.
 * По хорошему, нужно создавать 3 интерфейса:
 * результат mapStateToProps, результат mapDispatchToProps, и
 * собственные свойства компонента.
 * На практике, достаточно указать дженерику два первых пустых объекта,
 * и в третий аргумент отправить единый интерфейс свойств компонента.
 */
export default connect<{}, {}, TabListProps>(mapStateToProps)(TabList);