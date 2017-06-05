import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {CONG, TRU, RESET} from '../actions/actionTypes';
import Counter from '../components/Counter.js';

const mapStateToProps = state => ({
  count: state
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({ type: CONG }) },
  decrement: () => { dispatch({ type: TRU }) },
  reset: () => { dispatch({ type: RESET }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
