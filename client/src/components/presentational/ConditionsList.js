import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Img from 'react-image';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block'
  },
  placeHolder: {
    paddingTop: '56.25%',
    backgroundColor: '#3f51b5'
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const ConditionsList = ({ conditions }) => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {conditions.map(({ image, snippet, label }) => (
          <Grid item key={label} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <Img
                src={[
                  'https://via.placeholder.com/640x360.png?text=placeholder image',
                  { image }
                ]}
                loader={<div className={classes.placeHolder}></div>}
                className={classes.cardMedia}
              />

              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h2">
                  {label}
                </Typography>
                <Typography noWrap={true}>{snippet}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Find out more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

ConditionsList.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.object)
};

export default ConditionsList;
