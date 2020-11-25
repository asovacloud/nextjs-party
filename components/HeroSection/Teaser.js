import React from 'react'
import SbEditable from 'storyblok-react'

const HeroSection = ({blok}) => {
    return (
        <SbEditable content={blok}>
            <div className="hero-section">
                <h2>{blok.headline}</h2>
            </div>
        </SbEditable>
    )
};

export default HeroSection;