import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';


class Education extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hrInfo: true,
      scInfo: true,

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
          <span>2019</span>
          {this.state.hrInfo && <span>
            <FontAwesomeIcon icon={this.props.iconList[5]}/>
          </span>}
          {!this.state.hrInfo && <span>
            <FontAwesomeIcon icon={this.props.iconList[6]}/>
          </span>}
          {!this.state.hrInfo && <div className='invisible-text'>Some Text Here</div>}
        </div>

        <div className='dropdown' onClick={() => {this.handleClick('scInfo')}} >
          <span>UC Santa Cruz, Business Management Economics</span>
          <span>2011</span>
          {this.state.scInfo && <span>
            <FontAwesomeIcon icon={this.props.iconList[5]}/>
          </span>}
          {!this.state.scInfo && <span>
            <FontAwesomeIcon icon={this.props.iconList[6]}/>
          </span>}
          {!this.state.scInfo && <div className='invisible-text'>Some Text Here</div>}
        </div>


      </div>
    </div>
    )
  }
};

export default Education;
