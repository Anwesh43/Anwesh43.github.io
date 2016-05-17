import React from 'react';
export default class CustomComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter:0};
    }
    componentDidMount() {
        setInterval(()=>{
          this.setState({counter:this.state.counter+1});
        },1000);
    }
    render() {
        return (<div>
                  <p>{this.props.textElem}+":"+{this.state.counter}</p>
                </div>);
    }
}
