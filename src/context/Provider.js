import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { PersonalProvider } from './PersonalContext';
import { ProfessionalProvider } from './ProfessionalContext';


export default function Provider (props) {
  return (
    <LanguageProvider>
        <PersonalProvider>
            <ProfessionalProvider>
                {props.children}
            </ProfessionalProvider>
        </PersonalProvider>
    </LanguageProvider>
  )
}
