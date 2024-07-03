import './HeaderContainer.css';
import PropTypes from 'prop-types';


const HeaderContainer = ({ children }) =>{
    return (
        <div className="headerContainer">
            {children}
        </div>
    )
};

HeaderContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default HeaderContainer;