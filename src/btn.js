import React from 'react'; 
import PropTypes from 'prop-types';
import './btn.css';

const Btn = ({ value, onClick }) => {
    return (
        <div>
            <button onClick={onClick} className="button">
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