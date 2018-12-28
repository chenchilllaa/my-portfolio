import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require ('../images/logo.svg')} width="85" /></Link>
      <Link to="/routes">Routes</Link>
      <Link to="/about">About</Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
