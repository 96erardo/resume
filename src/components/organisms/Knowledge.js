import React from 'react';
import { withLanguageContext } from '../../context/LanguageContext';
import { withProfessionalContext } from '../../context/ProfessionalContext';

function Knowledge (props) {
    const { knowledge, selected } = props;

    const nodes = knowledge.map((item, n) => (
        <div key={n} className="block">
            <h3 className="title">{item.name[selected]}</h3>
            <div className="block-content">
                <ul className="list">
                    {item.nodes.map((i, index) => (
                        <li key={index}>{i[selected]}</li>
                    ))}
                </ul>
            </div>
        </div>
    )); 

    return (
        <div>
            {nodes}
        </div>
    );
}

export default withLanguageContext(withProfessionalContext(Knowledge));