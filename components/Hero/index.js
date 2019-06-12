import React from 'react';
import styled from 'reshadow';

const Hero = () => styled`
    wrapper {
        background-color: rgb(118, 48, 119);
    }
    hero {
        min-height: 50vw;
        max-height: 50vh;
        background-image: url('../../static/bg/2018-winner.jpg');
        background-size: cover;
        background-position: center;
        filter: opacity(.7);
    }
    @media only screen and (min-width: 800px) {
        hero {
            min-height: 40vw;
        }
    }
`(
    <wrapper>
        <hero />
    </wrapper>
);

export default Hero;