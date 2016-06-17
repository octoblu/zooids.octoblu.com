import React, { PropTypes } from 'react'

const propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool,
  title: PropTypes.string,
}

const defaultProps = {
  expanded: false,
}

class Collapse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: !!this.props.expanded,
    }
  }

  handleClick = (e) => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  renderTitle(title) {
    if (!title) return null

    return <button onClick={this.handleClick}>{title}</button>
  }

  render() {
    const { children, title } = this.props

    return (
      <div>
        {this.renderTitle(title)}
        <div>{children}</div>
      </div>
    )
  }
}

Collapse.propTypes    = propTypes
Collapse.defaultProps = defaultProps

export default Collapse
