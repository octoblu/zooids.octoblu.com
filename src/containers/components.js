import find from 'lodash.find'
import map from 'lodash.map'
import React, { PropTypes } from 'react'
import Highlight from 'react-highlight'
import Button from 'zooid-button'
import 'highlight.js/styles/github.css'

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

        {
          map(component.examples, (example) => {
            return (
              <div>
                <h3>{example.title}</h3>
                <p>{example.description}</p>

                {example.snippet}

                <Highlight className="html">
                  {example.snippet}
                </Highlight>
              </div>
            )
          })
        }
      </div>
    )
  }
}

Components.propTypes = propTypes
