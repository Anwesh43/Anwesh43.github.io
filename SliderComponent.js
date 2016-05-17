import {Slider,Slide} from 'react-materialize';
import React from 'react';
export default class SliderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {slideElems:[{src:'/img/livelife.jpg',title:'Be Yourself!',caption:'Change the perspective you see life',placement:'left'}]};
    }
    render() {
        var sliders = this.state.slideElems.map((slide)=><Slide src={slide.src} title={slide.title} placement={slide.placement}>{slide.caption}</Slide>);
        return (<Slider indicator="false">
              {sliders}
            </Slider>);
    }
}
