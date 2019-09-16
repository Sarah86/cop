import React, { Component } from 'react'
import { HamburgerSpin } from 'react-animated-burgers'
import "./theme.css"


class Hamburger extends Component {
  state = {
    isActive: false
  }

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    return (
        <HamburgerSpin isActive={this.state.isActive} toggleButton={this.toggleButton} barColor="var(--amarelocop)" />
    )
  }
}

export default Hamburger