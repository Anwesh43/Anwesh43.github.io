import React from 'react';
import {Chip,Row,Col,Tag} from 'react-materialize';
export default class ChipsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contacts:[{img:'/img/facebook.png',href:'https://www.facebook.com/anwesh.mishra.1',channel:'facebook'},{img:'/img/twitter.png',href:'https://twitter.com/AnweshMthecool',channel:'twitter'}]};
    }
    render() {
        var chips = this.state.contacts.map((chip)=><Chip><a href={chip.href} target="_blank"><img src={chip.img}/></a>{chip.channel}</Chip>)
        return (<Row>
          <Col s={8} l={6} className="offset-s4 offset-l5">
              {chips}
          </Col>
          </Row>);
    }
}
