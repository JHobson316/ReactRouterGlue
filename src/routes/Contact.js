import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import App from "../App.js"

export default class contact extends Component {
  render() {
    return (
      <div>
        <h4>Just placing some things to fill this</h4>
        <h2>Github: https://github.com/JHobson316</h2>
        <h3>Thanks for checking me out!</h3>
        <nav>
          <Link to="./App.js/about">About</Link> |
          | <Link to="./App.js/testpage">Test Page</Link> |
          | <Link to="./App.js/contact">Contacts</Link>
        </nav>
      </div>
    )
  }
}
