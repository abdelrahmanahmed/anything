import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Btn.css';

const Btn = ({ value, onClick, ...otherProps }) => {
    return (
        <div>
            <button onClick={onClick} className="button"{...otherProps}>
                {value}
            </button>
        </div>
    );
};

Btn.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

Btn.defaultProps = {
};

export default Btn;