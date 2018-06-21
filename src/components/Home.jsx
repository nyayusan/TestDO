import  React, { Component } from 'react';
import { Grid, Row} from 'react-bootstrap';
import './Home.css';
import BoxMenu from './BoxMenu';

function renderCheckboxes() {
    const {filter} = this.state;
    const chkbox = this.state.chkbox;

    const boxbrands = [
        {
            title: 'Apple',
            kind: 'Fruit',
            flag: '1',
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
            flag: '1',
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
            flag: '3',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            title: 'Orange',
            kind: 'Fruit',
            flag: '1',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            title: 'Beef',
            kind: 'Meat',
            flag: '3',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            title: 'Zucchini',
            kind: 'Vegetable',
            flag: '2',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        }

    ]

    this.state = { boxbrands };

    if (!chkbox){
        this.state.chkbox = true;
        return boxbrands
            .filter(boxbrand =>
                filter === 'ALL' ||
                filter === 'MEAT' && (boxbrand.flag != '3') ||
                filter === 'VEGETABLE' && (boxbrand.flag != '2') ||
                filter === 'FRUIT' && (boxbrand.kind != '1')
            )
            .map((boxbrand, index) =>
                <BoxMenu
                    titleBox={boxbrand.title}
                    kindBox={boxbrand.kind}
                    descBox={boxbrand.descr}
                />
            );
    }

    if (chkbox) {
        this.state.chkbox = false;
        return boxbrands
            .filter(boxbrand =>
                filter === 'ALL' ||
                filter === 'MEAT' && (boxbrand.flag === '3') ||
                filter === 'VEGETABLE' && (boxbrand.flag === '2') ||
                filter === 'FRUIT' && (boxbrand.kind === '1')
            )
            .map((boxbrand, index) =>
                <BoxMenu
                    titleBox={boxbrand.title}
                    kindBox={boxbrand.kind}
                    descBox={boxbrand.descr}
                />
            );
    }

}

function updateFilter(filter) {
    this.setState({
        filter
    });
}

export default class  Home extends Component {
    constructor(props) {
        super(props);


        this.state = {
            boxbrands: [],
            filter: 'ALL',
            chkbox: true
        };
    }



    render() {

        return (
            <div>
                <Grid id="filters">
                    <span>Filter :</span> {'\u00A0'}{'\u00A0'}
                    <span className="label label-danger">
                        <input type="checkbox" className="form-check-input" defaultChecked={this.state.chkbox} onChange={updateFilter.bind(this, 'MEAT')}></input>{'\u00A0'}
                        Meat{'\u00A0'}
                    </span>{'\u00A0'}{'\u00A0'}
                    <span className="label label-success">
                        <input type="checkbox" className="form-check-input" defaultChecked={this.state.chkbox}onChange={updateFilter.bind(this, 'VEGETABLE')}></input>{'\u00A0'}
                        Vegetable{'\u00A0'}
                    </span>{'\u00A0'}{'\u00A0'}
                    <span className="label label-warning">
                        <input type="checkbox" className="form-check-input" defaultChecked={!this.state.chkbox}onChange={updateFilter.bind(this, 'FRUIT')}></input>{'\u00A0'}
                        Fruit{'\u00A0'}
                    </span>{'\u00A0'}{'\u00A0'}

                    <br/>
                    <br/>

                    <Row className="show-grid row-flex">
                        {renderCheckboxes.call(this)}
                    </Row>

                </Grid>
            </div>
        )
    }
}

