import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faShoppingCart, faAddressCard, faBars, faTimes, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mobileOpen: false
         }
    }
    render() { 
        return ( 
            <header>
                <div id='ex'>

                <div id='icon-cont'>
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
                <div id='nav-links'>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                    <Link to='/items/'>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </Link>
                    <Link to='/cart/'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                    <Link to='/contact/'>
                        <FontAwesomeIcon icon={faAddressCard} />
                    </Link>
                </div>
                <div id='mobile-menu'>
                    <FontAwesomeIcon onClick={() => this.setState({mobileOpen: !this.state.mobileOpen}) } icon={this.state.mobileOpen ? faTimes : faBars} />
                </div>

                </div>
                <div id={this.state.mobileOpen ? 'nav-links-2-open':'nav-links-2-closed'}>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                    <Link to='/items/'>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </Link>
                    <Link to='/cart/'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                    <Link to='/contact/'>
                        <FontAwesomeIcon icon={faAddressCard} />
                    </Link>
                </div>
            </header>
         );
    }
}
 
export default Header;