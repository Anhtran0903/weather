import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../AppContext';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function Header() {
  const {count,setCount}=useContext(AppContext);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const {cart}=useContext(AppContext);
  return (
    <div>
 <Navbar color="faded" expand="lg"  >
        <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        <Link to="/cart"> <span>{cart}</span>  </Link>
      </Navbar>
   


<Link to="/product"> tran san pham  </Link>
<Link to="/"> trang chu   </Link>
<Link to="/register"> dang ky | dang nhap  </Link>


<Link to="/register"> dang ky | dang nhap  </Link>
    </div>
  )
}
