import React, { PropTypes } from 'react'
import ButtonExample from '../component-docs/ButtonExample'

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
      component: this.props.routeParams.componentId,
    })
  }

  componentWillReceiveProps({ routeParams }) {
    this.setState({
      component: routeParams.componentId,
    })
  }

  render() {
    const { component } = this.state

    if (component === 'button') return <ButtonExample />

    return null
  }
}

Components.propTypes = propTypes
