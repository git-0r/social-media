import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0 auto;
    color: rgb(33, 33, 33);
    /* max-width: 1440px; */
}
:root{
    --ff-heading : 'Work Sans', sans-serif;
    --ff-subheading: 'Maitree', serif;
    --ff-text: 'Work Sans', sans-serif;
    
    --bg-primary: #fff;
    --bg-secondary: #f0f2f5;
    --bg-third: #e4e6eb;
    --bg-forth: #f0f2f5;
    --color-primary: #050505;
    --color-secondary: #65676b;
    --divider: #ced0d4;
    --dark-bg-primary: #18191a;
    --dark-bg-secondary: #242526;
    --dark-bg-third: #3a3b3c;
    --dark-bg-forth: #3a3b3c;
    --dark-color-primary: #242526;
    --dark-color-secondary: #b0b3b8;
    --blue-color: #1876f2;
    --green-color: #42b72a;
    --red-color: #ff0000cc;
    --light-blue-color: #e7f3ff;
    --border-color: #ccced2;
    --shadow-1: rgba(0, 0, 0, 0.2);
    --shadow-2: rgba(0, 0, 0, 0.1);
    --shadow-3: rgba(0, 0, 0, 0.3);
    --shadow-inset: rgba(255, 255, 255, 0.5);

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
