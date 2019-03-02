import React from 'react';

const Context = React.createContext();

export class PersonalProvider extends React.Component {
    state = {
        name: 'Gerardo García',
        profession: { es: 'Desarrollador web', en: 'Web developer'},
        contact: [
            'gerardoagl96@gmail.com',
            '(+58) 426 9040308',
            'Bolivar, Venezuela'
        ],
        links: [
            {
                url: 'https://www.linkedin.com/in/gerardo-alfonso-garc%C3%ADa-l%C3%B3pez-2b7ba8127/',
                text: 'linkedin.com/gerardo-garcia'
            },
            {
                url: 'https://twitter.com/GerardoAGL96',
                text: 'twitter.com/GerardoAGL96'
            }
        ]
    }

    render () {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const PersonalConsumer = Context.Consumer;