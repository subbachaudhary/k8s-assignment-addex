import React from "react";
import PropTypes from 'prop-types'
function Sidebar(props){
    return(
        <button>Hey {props.name} This is big button from sidebar {props.Age}</button>
    )
}
Sidebar.propTypes = {
    name: PropTypes.string,
    Age: PropTypes.number
}
export default Sidebar;