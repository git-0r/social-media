import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0 auto;
}
:root{
    --ff-heading : 'Work Sans', sans-serif;
    --ff-subheading: 'Maitree', serif;
    --ff-text: 'Work Sans', sans-serif;
    --ff-placeholder: 'Flow Circular', cursive;
    
    @media only screen and (min-width: 48em) {
        font-size: 1rem;
    }
    @media only screen and (min-width: 64em){
    }
    @media only screen and (min-width: 85em) {
        font-size: 1.125rem;
    }
    @media only screen and (min-width: 120em) {
    }
    @media only screen and (min-width: 160em) {
        font-size: 1.25rem;
    }
}
`;
