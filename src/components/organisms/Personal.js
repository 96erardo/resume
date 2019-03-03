import React from 'react';
import { withLanguageContext } from './../../context/LanguageContext';
import { withPersonalContext } from './../../context/PersonalContext';

function Personal (props) {
    const { name, profession, contact, links, selected } = props;

    const con = contact.map((elem, i) => (
        <li key={i} className="my-1">{elem}</li>
    ));

    const webs = links.map((elem, i) => (
        <li key={i}>
            <a href={elem.url} target="_blank">{elem.text}</a>
        </li>
    ));

    return (
        <div>
            <h1 className="name">{name}</h1>
            <p className="profession">{profession[selected]}</p>
            <div className="contact">
                <ul>
                    {con}
                </ul>
            </div>
            <div className="webs">
                <ul>
                    {webs}
                </ul>
            </div>
        </div>
    );
}

export default withLanguageContext(withPersonalContext(Personal));
