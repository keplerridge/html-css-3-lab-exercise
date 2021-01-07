import {Component} from 'react'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dropdown: false
    }
  }

  toggleDropdown = () => {
    this.setState({dropdown: !this.state.dropdown});
  }
  
  render (){
    return (
      <div>
        <header>
          <p id='bootstrap'>Start Bootstrap</p>
          <section className='navbar'>
            <span>SERVICES</span>
            <span>PORTFOLIO</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>CONTACT</span>
          </section>
          <div className='dropdown' onClick={this.toggleDropdown}>Menu</div>
          {this.state.dropdown
          ? (
            <nav className='mobile-dropdown'>
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </nav>
          )
          : null}
        </header>
        <section className='main'>
          <p id='welcome'>Welcome To Our Studio</p>
          <p id='greeting'>IT'S NICE TO MEET YOU</p>
          <button id='tell-button'>TELL ME MORE</button>
        </section>
      </div>
    )
  }

}

export default App;
