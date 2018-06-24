import  React, { Component } from 'react';
import { Grid, Row} from 'react-bootstrap';
import { Checkbox } from 'antd';
import './Home.css';
import BoxMenu from './BoxMenu';


function filterBox() {
    const checkState = this.state.checked;
    const val1 = checkState.indexOf("1");
    const val2 = checkState.indexOf("2");
    const val3 = checkState.indexOf("3");

    const boxbrands = [
        {
            title: 'Apple',
            kind: 'Fruit',
            flag: '3',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            title: 'Aubergine',
            kind: 'Gemuese',
            flag: '2',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            title: 'Banana',
            kind: 'Fruit',
            flag: '3',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            title: 'Broccoli',
            kind: 'Vegetable',
            flag: '2',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            title: 'Chicken',
            kind: 'Meat',
            flag: '1',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            title: 'Orange',
            kind: 'Fruit',
            flag: '3',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            title: 'Beef',
            kind: 'Meat',
            flag: '1',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            title: 'Zucchini',
            kind: 'Vegetable',
            flag: '2',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        }

    ]


    return boxbrands
        .filter(boxbrand =>
            (val1 != -1 && (boxbrand.flag === '1')) ||
            (val2 != -1 && (boxbrand.flag === '2')) ||
            (val3 != -1 && (boxbrand.flag === '3'))
        )
        .map((boxbrand, index) =>
             <BoxMenu
                 titleBox={boxbrand.title}
                 kindBox={boxbrand.kind}
                 descBox={boxbrand.descr}
             />
        );


}

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: [],
        };

    }


    render() {
        const CheckboxGroup = Checkbox.Group;

        return (
            <div>
                <Grid>
                    <CheckboxGroup onChange={value => this.setState({checked: value})}>
                        <span>Filter :</span> {'\u00A0'}{'\u00A0'}
                        <span className="label label-danger">
                           <Checkbox value='1'>Meat</Checkbox>
                        </span>{'\u00A0'}{'\u00A0'}
                        <span className="label label-success">
                           <Checkbox value='2'>Vegetable</Checkbox>
                        </span>{'\u00A0'}{'\u00A0'}
                        <span className="label label-warning">
                           <Checkbox value='3'>Fruit</Checkbox>
                        </span>{'\u00A0'}{'\u00A0'}
                    </CheckboxGroup>
                    <br/>
                    <br/>
                    <Row className="show-grid row-flex">
                        {filterBox.call(this)}
                    </Row>
                </Grid>
            </div>
        );
    }
}
