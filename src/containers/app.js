import React, { PropTypes } from 'react'

import SideBar from '../components/SideBar'

const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SideBar />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

App.propTypes = propTypes
