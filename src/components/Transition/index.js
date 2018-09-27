import React, { Component } from 'react'
import { Transition as ReactTransition } from 'react-transition-group'
import getTransitionStyle from '../../utils/getTransitionStyle'
import { historyExitingEventType, timeout } from '../../../gatsby-browser'

class Transition extends Component {
  state = { exiting: false }

  listenerHandler = event => {
    this.setState({ exiting: true })
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler)
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler)
  }

  static getDerivedStateFromProps({ exiting }) {
    if (exiting) {
      return { exiting: false }
    }
    return null
  }

  render() {
    const transitionProps = {
      timeout: {
        enter: 0,
        exit: timeout
      },
      appear: true,
      in: !this.state.exiting
    }

    return (
      <ReactTransition {...transitionProps}>
        {status => (
          <div
            style={{
              ...getTransitionStyle({ status, timeout })
            }}
          >
            <>{this.props.children}</>
          </div>
        )}
      </ReactTransition>
    )
  }
}

export default Transition
