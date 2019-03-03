import React from 'react';
import { selectLanguage } from './../../context/actions/languageActions';

export default function RsOptions (props) {
    const { items, handleClick } =  props;

    const onClick = (e) => {
        const id = e.currentTarget.dataset.value;

        handleClick(selectLanguage(parseInt(id)));
    }

    const list = items.map((item) => (
        <li key={item.id} data-value={item.id} onClick={onClick}>
            <img src={item.imageURL} alt={item.alt}/>
        </li>
    ));
    
    return (
        <React.Fragment>
            {list}
        </React.Fragment>
    );
}
