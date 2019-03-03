import React from 'react';
import classnames from 'classnames';
import Personal from './../organisms/Personal';
import Knowledge from './../organisms/Knowledge';
import Experience from './../organisms/Experience';

function Resume (props) {
    const { className } = props;

    const resumeClass = classnames({
        page: true,
        [className]: className ? true: false 
    });

    return (
        <div className={resumeClass}>
            <div className="page-body">
                <div className="row">
                    <div className="col-md-5">
                        <Personal />
                        <Knowledge />
                    </div>
                    <div className="col-md-7">
                        <Experience />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;

