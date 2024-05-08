import React from 'react';
import {Link, Outlet} from 'react-router-dom';

function Layout() {
  return (
    <div>
        <p>Layout</p>
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/counter'>Counter</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout