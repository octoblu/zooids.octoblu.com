import find from 'lodash.find'
import React, { PropTypes } from 'react'
import Highlight from 'react-highlight'

import 'highlight.js/styles/dark.css'

import components from '../component-manifest'

const propTypes = {
  routeParams: PropTypes.object.isRequired,
}

export default class Components extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      component: null,
    }
  }

  componentWillMount() {
    this.setState({
      component: find(components, { id: this.props.routeParams.componentId }),
    })
  }

  componentWillReceiveProps({ routeParams }) {
    this.setState({
      component: find(components, { id: routeParams.componentId }),
    })
  }

  render() {
    const { component } = this.state

    if (!component) return null

    return (
      <div>
        <h1>
          {component.name}
        </h1>

        <pre>npm install {component.package}</pre>
        <a href={`https://github.com/octoblu/${component.package}`}>Github</a>

        <h3>Sizes</h3>

        <Highlight className="html">
          {"<div> Hello </div>"}
        </Highlight>

      </div>
    )
  }
}

Components.propTypes = propTypes
