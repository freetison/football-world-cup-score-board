import React from 'react';
import PropTypes from 'prop-types';
import styles from './scoreboard.module.css';

const Scoreboard = () => (
  <div className={styles.Scoreboard} data-testid="Scoreboard">
    Scoreboard Component
  </div>
);

Scoreboard.propTypes = {};

Scoreboard.defaultProps = {};

export default Scoreboard;
