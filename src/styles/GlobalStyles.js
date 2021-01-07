import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --dark-grey: #414248;
        --light-grey: #58656F;
        --off-white: #FDFCFB;
        --peach: #DBB9AE;
        --plum: #9E95A0;
    }

    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    figure {
        margin: 0;
    }

    // links
    a {
        color: var(--plum);
        text-decoration: none;

        &:active,
        &:focus {
            color: var(--light-grey);
        }
    }

    // selection styles
    ::selection {
        background-color: var(--peach);
        color: var(--off-white);
    }

    // global button styles
    button,
    .button {
        background-color: var(--plum);
        color:(--dark-grey);
        border: 0;
        padding: .5rem 1rem;
        border-radius: .3rem;
        cursor: pointer;
        font-size: 1.6rem;
        letter-spacing: .15rem;
        transition: all .2s;
        &:hover {
            background-color: var(--peach);
        }
    }

    // pixelated effect for gatsby images
    .gatsby-image-wrapper img[src*=base64\\,] {
        image-rendering: -moz-crisp-edges;
        image-rendering: pixelated;
    }
`;

export default GlobalStyles;