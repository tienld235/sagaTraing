import React, { Component } from 'react'
import { connect } from 'react-redux';
import CounterComponent from '../components/CounterComponent';
import { decreaseAction, increaseAction } from '../actions'

const mapStateToProps = (state) => ({
    count: state.counterReducer
});

const mapDispatchToProps = (dispatch) => ({
    onIncrease: (step) => {
        dispatch(increaseAction(step));
    },
    onDecrease: (step) => {
        dispatch(decreaseAction(step));
    }
});

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
export default CounterContainer;