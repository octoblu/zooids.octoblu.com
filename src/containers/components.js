import find from 'lodash.find'
import React, { PropTypes } from 'react'

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
    const { componentId } = this.props.routeParams

    this.setState({
      component: find(components, { id: componentId }),
    })
  }

  render() {
    const { component } = this.state

    if (!component) return null

    return (
      <h1>
        Component: {component.name}
      </h1>
    )
  }
}

Components.propTypes = propTypes
