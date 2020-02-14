import React from 'react';

const Project = ({ name, id }) => {
    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
            >
                {name}
            </button>
        </li>
     );
}
 
export default Project;
