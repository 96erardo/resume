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
        ],
        dispatch: () => {}
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

export function withPersonalContext(WrappedComponent) {
    class WithPersonalContext extends React.Component {
        render () {
            return (
                <PersonalConsumer>
                    {state => (
                        <WrappedComponent {...this.props} {...state} />
                    )}
                </PersonalConsumer>
            );
        }
    }

    const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    WithPersonalContext.displayName = `WithPersonalContext(${name})`;

    return WithPersonalContext;
};