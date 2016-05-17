import {Card,CardTitle} from 'react-materialize';
import React from 'react';
export default class CardComponent extends React.Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return (<Card className="small  cyan darken-1" header={<CardTitle image={this.props.imageSrc}></CardTitle>} title={this.props.textElem}>
        </Card>);
    }
}
