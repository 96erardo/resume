import React from 'react';
import { withLanguageContext } from '../../context/LanguageContext';
import { withProfessionalContext } from '../../context/ProfessionalContext';

function Experience (props) {
    const { exp, selected } = props;

    const nodes = exp.map((item) => (
        <div className="block">
            <h3 className="title">{item.name[selected]}</h3>
            <div className="block-content">
                <ul className="list">
                    {item.nodes.map((i) => (
                        <li>
                            <h4 className="institution">
                                {i.institution[selected]} <span className="role">{i.role[selected]}</span>
                            </h4>
                            <p className="info">
                                {i.info.end != null ? (
                                    i.info.start[selected] + ' - ' + i.info.end[selected]
                                ):(
                                    i.info.start[selected]
                                )}
                            </p>
                            <p dangerouslySetInnerHTML={{ __html: i.desc[selected] }}></p>
                        </li>
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

export default withLanguageContext(withProfessionalContext(Experience));