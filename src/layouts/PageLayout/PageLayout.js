import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import Footer from '../../components/Footer'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <div className='main-header-wrapper'>
      <div className='main-header'>UNPAMKITA.COM</div>
    </div>
    <div className='main=navigation'>
      <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
      {' · '}
      <Link to='/whoweare' activeClassName='page-layout__nav-item--active'>Who We Are</Link>
    </div>
    <div className='page-layout__viewport'>
      {children}
    </div>
    {
      // <div clasName='page-layout__footer'>
      //   <Footer />
      // </div>
    }
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
