import React from 'react';
import PropTypes from 'prop-types';


// Label with required field display, htmlFor, and block styling

const InputLabel = ( { htmlFor, label, required } ) => (
    <label
        style={ {display: 'block'} }
        htmlFor={htmlFor}
    >{label} { required && <span style={{color: 'red'}}> *</span>}</label>
);

InputLabel.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
}

export default InputLabel;