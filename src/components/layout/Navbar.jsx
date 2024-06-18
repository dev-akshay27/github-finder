import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral'>
    <div className='container mx-auto'>
  
    <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' style={{color: 'white'}} />
          <Link to='/' className='text-lg font-bold align-middle' style={{color: 'white'}} >
            {title}
          </Link>
        </div>

        <div className="flex px-2 mx-2">
          <div className="flex jutify-end">
            <Link to='/' className='btn btn-ghost font-bold btn-sm rounded-btn' style={{color: 'white'}} >
            Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn' style={{color: 'white'}} >
            About
            </Link>
          </div>
        </div>
    </div>
 </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.propTypes = {
title: PropTypes.string,
}

export default Navbar
