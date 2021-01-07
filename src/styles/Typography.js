import { createGlobalStyle } from 'styled-components';

import primaryFont from '../assets/fonts/Futura_Medium.otf';
import secondaryFont from '../assets/fonts/VarelaRound-Regular.ttf';

const Typography = createGlobalStyle`
    @font-face {
        font-family: FuturaMedium;
        src: url(${primaryFont});
    }

    @font-face {
        font-family: VarelaRound;
        src: url(${secondaryFont});
    }

    html {
        font-size: 62.5%;
        font-family: VarelaRound;
    }

    body {
        line-height: 1.6;
        font-size: 1.6rem;
    }

    h1,
    h2,
    h3,
    h4 {
        font-family: FuturaMedium, sans-serif;
    }
`;

export default Typography;