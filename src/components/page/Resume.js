import React from 'react';
import classnames from 'classnames';

export default function Resume (props) {
    const { className } = props;

    const resumeClass = classnames({
        page: true,
        [className]: className ? true: false 
    });

    return (
        <div className={resumeClass}>
            <div className="page-body">

            </div>
        </div>
    );
}
