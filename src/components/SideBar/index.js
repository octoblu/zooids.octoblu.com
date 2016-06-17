import React from 'react'
import { Link } from 'react-router'

import Collapse from '../Collapse'
import components from '../../component-manifest'

import './styles.css'

const SideBar = () => {
  const componentItemList = components.map((component) => {
    return (
      <li key={component.id}>
        <Link to={`/components/${component.id}`}>{component.name}</Link>
      </li>
    )
  })

  return (
    <aside className="SideBar">
      <nav role="navigation">
        <Link to="/">Getting Started</Link>
        <Link to="/design">Design</Link>

        <Collapse title="Components">
          <ul>{componentItemList}</ul>
        </Collapse>


        <Link to="/generators">Generators</Link>
      </nav>
    </aside>
  )
}

export default SideBar
