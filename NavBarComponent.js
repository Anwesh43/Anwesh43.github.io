import React from 'react'
import {Navbar,NavItem} from 'react-materialize'
export default class NavBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {links:[]};
    }
    render() {
        var navBarItems = this.state.links.map((link)=><NavItem href={link.href}>{link.title}</NavItem>)
        return (<Navbar brand="Anwesh43" right>
            {navBarItems}
        </Navbar>);
    }
}
