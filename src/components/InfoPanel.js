import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Panel = styled.div`
  color: white;
  font-weight: 800;
  font-family: 'Helvetica';
  text-decoration: underline;
  font-size: 1.3rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${props => props.position.y - 100}px;
  left: ${props => props.position.x}px;
`;

const InfoPanel = ({ position }) => {
  return (
    <Panel position={position}>
      {position.target}
    </Panel>
  );
};

InfoPanel.defaultProps = {
  position: {
    x: 0,
    y: 0,
  },
};

InfoPanel.propTypes = {
  position: PropTypes.object,
};

export default InfoPanel;
