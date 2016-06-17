import React from 'react'
import { Link } from 'react-router'

import Collapse from '../Collapse'

import './styles.css'

const SideBar = () => {
  return (
    <aside className="SideBar">
      <nav role="navigation">
        <Link to="/">Getting Started</Link>
        <Link to="/design">Design</Link>

        <Collapse title="Components">
          <ul>
            <li>
              <Link to="/components/alerts">Alerts</Link>
            </li>
            <li>
              <Link to="/components/app-bar">App Bar</Link>
            </li>
            <li>
              <Link to="/components/breadcrumbs">Breadcrumbs</Link>
            </li>
            <li>
              <Link to="/components/button">Button</Link>
            </li>
            <li>
              <Link to="/components/card">Card</Link>
            </li>
            <li>
              <Link to="/components/device-icon">Device Icon</Link>
            </li>
            <li>
              <Link to="/components/empty-state">Empty State</Link>
            </li>
            <li>
              <Link to="/components/error-state">Error State</Link>
            </li>
            <li>
              <Link to="/components/form">Form</Link>
            </li>
            <li>
              <Link to="/components/list">List</Link>
            </li>
            <li>
              <Link to="/components/lookup">Lookup</Link>
            </li>
            <li>
              <Link to="/components/message">Message</Link>
            </li>
            <li>
              <Link to="/components/nav">Nav</Link>
            </li>
            <li>
              <Link to="/components/octoblu-app-bar">Octoblu App Bar</Link>
            </li>
            <li>
              <Link to="/components/page">Page</Link>
            </li>
            <li>
              <Link to="/components/progress-bar">Progress Bar</Link>
            </li>
            <li>
              <Link to="/components/spinner">Spinner</Link>
            </li>
            <li>
              <Link to="/components/top-bar">Top Bar</Link>
            </li>
          </ul>
        </Collapse>


        <Link to="/generators">Generators</Link>
      </nav>
    </aside>
  )
}

export default SideBar
