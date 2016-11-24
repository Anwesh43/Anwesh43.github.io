import React from 'react'
import {Row,Col} from 'react-materialize';
import CardComponent from './CardComponent';
export default class CardGroupComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {skills:[{img:'react.png',name:'React js'},{img:'android.png',name:'Android Apps'},{img:'angularjs.png',name:'Angular1&2'},{img:'nodejs.jpg',name:'Node js'},{img:'golang.png',name:'go lang'},{img:'mongodb.png',name:'Mongodb'},{img:'materialize.png',name:'Materialize css'},{img:'es6.png',name:'Ecmascript 6'}]};
    }
    render() {
        var CardComponents = this.state.skills.map((skill)=><Col className="offset-s2" s={8} m={4} l={3}><CardComponent imageSrc={'/img/'+skill.img} textElem={skill.name}/></Col>);
        return (<Row>
                    {CardComponents}
              </Row>);
    }
}
