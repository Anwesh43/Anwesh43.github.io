import React from 'react';
import ReactDOM from 'react-dom';
import OtherComponent from './OtherComponent';
import {Collection,CollectionItem,Row,Col} from 'react-materialize';
import CardComponent from './CardComponent';
import CardGroupComponent from './CardGroupComponent'
import IntroComponent from './IntroComponent'
import SliderComponent from './SliderComponent'
import NavBarComponent from './NavBarComponent'
import ChipsComponent from './ChipsComponent'
import Smooch from 'smooch'
class FinalComponent extends React.Component {
      constructor(props) {
          super(props);
          this.state = {names:["A1","A2","A3","A4","A5","A6"]};
      }
      componentDidMount() {
          Smooch.init({appToken:'acxwrzxvem09nr2s61lebpf54'})
      }
      render() {
          return (<div>
                <NavBarComponent/>
                <Row>
                </Row>
                <div className='container'>
                <SliderComponent/>
                <Row></Row>
                <Row></Row>
                <IntroComponent/>
                <Row></Row>
                <Row></Row>
                <Row></Row>
                <Row>
                    <Col s={12}>
                      <h2 className="center-align white-text darken-3">Keep In Touch</h2>
                    </Col>
                    <Col s={12}>
                      <ChipsComponent/>
                    </Col>
                </Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
                <Row>
                    <Col s={12}>
                      <h3 className="center-align white-text darken-3">Skills</h3>
                    </Col>
                    <Col s={12}>
                      <CardGroupComponent/>
                    </Col>
                </Row>
            </div>
          </div>);
      }
}
ReactDOM.render(<FinalComponent/>,document.getElementById('tik'));
