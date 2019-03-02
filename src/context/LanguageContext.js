import React from 'react';

const Context = React.createContext();

export class LanguageProvider extends React.Component {
    state = {
        langs: ["es", "en"],
        selected: "es",
        selectLanguage: this.selectLanguage
    }

    selectLanguage = (lang) => {
        const { langs } = this.state;

        this.setState({
            selected: langs.includes(lang) ? lang : "en"
        });
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