import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Styles from './NavBar.module.css'




function NavBar() {

  return (
    <nav className='navbar-nav bg-warning'>
      <div className="d-flex justify-content-between p-2">
        <Link className='text-dark' to='/'>
          LOGO
        </Link>

        <ul className={Styles} >
          <li><Link className='nav-link' to='/'>Home</Link></li>
          <li><Link className='nav-link' to="/categoria">Ver Categorias</Link></li>
          <li><Link className='nav-link' to="/categoria/create">Cadastrar Categorias</Link></li>
          <li><Link className='nav-link' to="/pet/create">Cadastrar Pet</Link></li>

        </ul>
      </div>
    </nav>
  )
}

export default NavBar