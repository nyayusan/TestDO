import React, { Component } from 'react';
import { Col, Panel} from 'react-bootstrap';
import './BoxMenu.css';




export default class BoxMenu extends Component {
    btnMenu() {

        const isBtn = this.props.kindBox;
        if (isBtn === 'Fruit') {
            return(
                <button type ="button" className="btn btn-warning btn-xs pull-right buttonRad">{this.props.kindBox}</button>
            );
        } else if ((isBtn === 'Vegetable') || (isBtn === 'Gemuese')) {
            return(
                <button type ="button" className="btn btn-success btn-xs pull-right buttonRad">{this.props.kindBox}</button>
            );
        } else if (isBtn === 'Meat') {
            return(
                <button type ="button" className="btn btn-danger btn-xs pull-right buttonRad">{this.props.kindBox}</button>
            );
        }

    }


    render() {
        return (
            <Col sm={3} md={3} xs={12} >
                <Panel>
                    <Panel.Body className="PnlBody1">
                    </Panel.Body>

                    <Panel.Body className="PnlBody2">

                        <h3>{this.props.titleBox} {this.btnMenu()}
                        </h3>
                        <p>{this.props.descBox}</p>
                        <br/>
                        <a href="./About.jsx"><span className="infoArrow">> </span>More Info</a>
                    </Panel.Body>
                </Panel>
            </Col>
        )
    }
}
