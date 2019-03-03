import React from 'react';
import languageReducer from './reducers/languageReducer';

const Context = React.createContext();

export class LanguageProvider extends React.Component {
    state = {
        langs: [
            {
                id: 1,
                name: 'Spanish',
                iso: 'es',
                imageURL: 'images/spain.svg',
                alt: 'Spanish Language'
            },
            {
                id: 2,
                name: 'English',
                iso: 'en',
                imageURL: 'images/united-states.svg',
                alt: 'English Language'
            }
        ],
        selected: "es",
        dispatch: (action) => {
            this.setState(languageReducer(this.state, action))
        }
    }

    render () {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const LanguageConsumer = Context.Consumer;

export function withLanguageContext(WrappedComponent) {
    class WithLanguageContext extends React.Component {
        render () {
            return (
                <LanguageConsumer>
                    {state => (
                        <WrappedComponent {...this.props} {...state}/>
                    )}
                </LanguageConsumer>
            );
        }
    }

    const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    WithLanguageContext.displayName = `WithLanguageContext(${name})`;

    return WithLanguageContext;
};