import React, { Component } from 'react';
import styles from './Planets.css';
import InfoPanel from './InfoPanel';
import styled, { keyframes } from 'styled-components';
import mars from './../mars.png';
import saturn from './../saturn2.png';
import pluto from './../pluto.png';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Planet = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: inline-block;
  position: absolute;
  animation: ${rotate360} ${props => (props.orbit ? props.orbit : '20s')} linear infinite;
`;

const Mars = styled(Planet)`
  top: 30%;
  left: 30%;
  transform-origin: 190px 190px;
  background: url(${mars});
  background-size: cover;
`;

const Pluto = styled(Planet)`
  background: url(${pluto});
  background-size: cover;
  border-top: 70px;
  border: 0;
  width: 3rem;
  height: 3rem;
  top: 40%;
  left: 40%;
  transform-origin: 120px 120px;
`;
const Sun = styled(Planet)`
  box-shadow: 0 0 120px #f1da36, 0 0 60px #f2ad00, 0 0 10px #c96800, 0 0 200px #feff8f;
  background: radial-gradient(center, ellipse cover, #fcf3a1   0%,#f1da36 100%);
    box-shadow: 0 0 120px #f1da36, 0 0 60px #f2ad00, 0 0 10px #c96800, 0 0 200px #feff8f;
  border:0;
  top: 50%;
  left: 50%;
`;

const Saturn = styled.img`
  width: 5rem;
  height: 3rem;
  display: inline-block;
  position: absolute;
  animation: ${rotate360} ${props => (props.orbit ? props.orbit : '20s')} linear infinite;
  top: 40%;
  left: 50%;
  transform-origin: 120px 120px;
`;

const Space = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url('https://i.ytimg.com/vi/M2uBtg_PzKg/maxresdefault.jpg');
  background-size: cover;
`;
class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleInfoPanel: false,
      position: {
        x: 0,
        y: 0,
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { toggleInfoPanel } = this.state;
    this.setState({
      position: {
        x: event.screenX,
        y: event.screenY,
        target: event.target.id,
      },
      toggleInfoPanel: !toggleInfoPanel,
    });
  }

  render() {
    return (
      <Space>
        {this.state.toggleInfoPanel &&
          <InfoPanel position={this.state.position} />}
        <Mars id="Mars" orbit="50s" onClick={this.handleClick} />
        <Pluto id="Pluto" orbit="100s" onClick={this.handleClick} />
        <Saturn
          id="Saturn"
          src={saturn}
          orbit="200s"
          onClick={this.handleClick}
        />
        <Sun />
      </Space>
    );
  }
}

export default Planets;
