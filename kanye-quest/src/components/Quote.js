import React from 'react';
import { connect } from 'react-redux';
import kanye from '../media/kanye.png';
import { getQuote } from '../actions';
import styled from 'styled-components';

let Main = styled.div`
background-color: white;
border: 1px solid white;
border-radius: 20px;
margin-top: 25%;
height: auto;
width: auto;
padding: 100px;
opacity: 80%;
text-align: center;
`

const Quote = props => {
    return (
        <Main>
            <h1>We're going on a Kanye Quest</h1>
            {!props.quote && !props.isFetching && <p>Hit the button for Kanye's best!</p>}
            {props.isFetching && (
                <img src={kanye} alt="Kanye West spinning" className="spinner" />
            )}
            {props.quote && <p>{props.quote.quote}</p>}
            <button onClick={props.getQuote}>West</button>
        </Main>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getQuote }
)(Quote)