import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Navbar from './Navbar.jsx';

export default function DefaultLayout() {
  return (
    <div className='layout'>
      <Header />
        <Navbar />
        <Outlet />
      <Footer />
    </div>
  )
}