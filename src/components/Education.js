import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';


class Education extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hrInfo: true,
      scInfo: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (name) {
    this.setState({ [name]: !this.state[name] });
  };

  render() {
    return (
    <div className='Education'>
      <div className='heading'>Education</div>
      <div className='dropdown-container'>

        <div className='dropdown' onClick={() => {this.handleClick('hrInfo')}}>
          <span>Hack Reactor, Advanced Software Engineering Immersive</span>
          <span className='dropdown-date'>2019</span>
          {this.state.hrInfo && <span className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[5]}/>
          </span>}
          {!this.state.hrInfo && <span className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[6]}/>
          </span>}
        </div>

        {!this.state.hrInfo && <div className='invisible-dropdown'>
            <div className='invisible-dropdown-title'>Full Stack JavaScript 18 Week Program</div>
            <div className='invisible-dropdown-text'>
              lorem ipsum.....
            </div>
          </div>}

        <div className='dropdown' onClick={() => {this.handleClick('scInfo')}} >
          <span>UC Santa Cruz, Bachelor of Arts</span>
          <span className='dropdown-date'>2011</span>
          {this.state.scInfo && <span className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[5]}/>
          </span>}
          {!this.state.scInfo && <span className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[6]}/>
          </span>}
        </div>

        {!this.state.scInfo && <div className='invisible-dropdown'>
            <div className='invisible-dropdown-title'>Major in Business Management Economics</div>
            <div className='invisible-dropdown-text'>
              lorem ipsum.....
            </div>
          </div>}

      </div>
    </div>
    )
  }
};

export default Education;
