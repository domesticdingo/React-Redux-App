import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getQuote } from '../actions';

const Quote = props => {
    return (
        <div>
            <h1>We're going on a Kanye Quest</h1>
            {!props.quote && !props.isFetching && <p>Hit the button for Kanye's best!</p>}
            {props.isFetching && (
                <Loader type="Bars" color="#66CDAA" height={80} width={80} />
            )}
            {props.quote && <p>{props.quote.quote}</p>}
            <button onClick={props.getQuote}>West</button>
        </div>
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