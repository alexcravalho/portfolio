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

        {this.state.hrInfo && <div className='dropdown-grey' onClick={() => {this.handleClick('hrInfo')}}>
          <span>Hack Reactor, Advanced Software Engineering Immersive</span>
          <span className='dropdown-date-grey'>2019</span>
          <span className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[5]}/>
          </span>
        </div>}

        {!this.state.hrInfo && <div className='dropdown-green' onClick={() => {this.handleClick('hrInfo')}}>
          <span>Hack Reactor, Advanced Software Engineering Immersive</span>
          <span className='dropdown-date-white'>2019</span>
          <span className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[6]}/>
          </span>
        </div>}

        {!this.state.hrInfo && <div className='invisible-dropdown'>
            <div className='invisible-dropdown-title'>Full Stack JavaScript 18 Week Program</div>
            <div className='invisible-dropdown-text'>
              lorem ipsum.....
            </div>
          </div>}

        {this.state.scInfo && <div className='dropdown-grey' onClick={() => {this.handleClick('scInfo')}} >
          <span>UC Santa Cruz, Bachelor of Arts</span>
          <span className='dropdown-date-grey'>2011</span>
          <span className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[5]}/>
          </span>
        </div>}

        {!this.state.scInfo && <div className='dropdown-green' onClick={() => {this.handleClick('scInfo')}} >
          <span>UC Santa Cruz, Bachelor of Arts</span>
          <span className='dropdown-date-white'>2011</span>
          <span className='dropdown-symbol'>
            <FontAwesomeIcon icon={this.props.iconList[6]}/>
          </span>
        </div>}

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
