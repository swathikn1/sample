import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import '../App.css'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className='page'>
      <header className='navbar'>
        <img src="src/images/logo.png" alt="Logo"></img>
        <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/service">What we serve</Link>
        <Link to="/contact">Contact</Link>
        <Link to='/table'>Table</Link>
      </nav>
      </header>
      <hr />
      <Outlet />
    </div>
  )
}
