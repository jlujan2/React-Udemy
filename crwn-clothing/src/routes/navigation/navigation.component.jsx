import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrwnLogo } from '../../assets/iron-maiden.svg';
import { NavigationContainer, LogoContainer, NavLink, NavLinksContainer } from './navigation.styles';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import { useSelector } from 'react-redux';
import {selectCurrentUser} from '../../store/user/user.selector';
import {selectIsCartOpen} from '../../store/cart/cart.selector'

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='logo' />
            </LogoContainer>
          <NavLinksContainer >
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
           
            {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                {''}
                SIGN OUT{''}
              </NavLink>
              ): (
              <NavLink to='/auth'>
                SIGN IN
              </NavLink>)
            }
            <CartIcon />
          </NavLinksContainer>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;