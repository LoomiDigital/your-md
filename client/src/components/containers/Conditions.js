import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchConditions } from '../../actions/conditions';

class Conditions extends Component {
  componentDidMount() {
    const { getConditions } = this.props;

    getConditions();
  }

  render() {
    const { conditions, isLoading } = this.props;

    if (isLoading) {
      return <div>Loading</div>;
    }

    return (
      <ul>
        {conditions.map(condition => (
          <li>{condition.label}</li>
        ))}
      </ul>
    );
  }
}

Conditions.propTypes = {
  PropTypes
};

const mapStateToProps = ({ conditionsReducer }) => ({
  conditions: conditionsReducer.conditions,
  isLoading: conditionsReducer.isLoading
});

const mapDispatchToProps = {
  getConditions: fetchConditions
};

export default connect(mapStateToProps, mapDispatchToProps)(Conditions);
