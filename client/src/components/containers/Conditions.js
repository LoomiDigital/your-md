import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { fetchConditions } from '../../actions/conditions';

import ConditionsList from '../presentational/ConditionsList';
import Loader from '../presentational/Loader';

const useStyles = makeStyles(() => ({
  loaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20em'
  }
}));

const Conditions = () => {
  const conditions = useSelector(
    ({ conditionsReducer }) => conditionsReducer.conditions
  );

  const isLoading = useSelector(
    ({ conditionsReducer }) => conditionsReducer.isLoading
  );

  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConditions());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Container maxWidth="md" className={classes.loaderContainer}>
        <Loader />
      </Container>
    );
  }

  return <ConditionsList conditions={conditions} />;
};

export default Conditions;
