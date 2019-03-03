import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RsOptions from './../molecules/RsOptions';

export default function RoundSelector (props) {
    const { face, items, handleClick } = props;
    
    return (
        <div className="round-select">
            <div className="select-face">
                <FontAwesomeIcon icon={face} />
            </div>
            <ul>
                <RsOptions 
                    items={items}
                    handleClick={handleClick}
                />
            </ul>
        </div>
    );
}
