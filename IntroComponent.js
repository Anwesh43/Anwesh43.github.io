import {Row,Col,CardPanel} from 'react-materialize';
import React from 'react';
export default class IntroComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<Row>
          <Col className="offset-m2 offset-l3" s={12} m={8} l={6}>
            <CardPanel className="grey lighten-5 z-depth-1">
            <Row className="valign-wrapper">
              <Col s={2}>
                  <img src="img/anweshm.jpg" alt="" className="circle responsive-img"/>
              </Col>
              <Col s={10}>
                <span className="black-text">
                  Hi I am Anwesh Mishra a full stack developer. I take life as it comes.Please check my contact details and skills below.
                </span>
              </Col>
            </Row>
            </CardPanel>
          </Col>
        </Row>);
    }
}
