import React from 'react'
import SbEditable from 'storyblok-react'

const HeroSection = ({blok}) => {
    return (
        <SbEditable content={blok}>
            <div className="hero-section white-text">
                <div className="container">
                    <h3 className="hero-section__title">{blok.headline}</h3>
                    { blok.image && (
                        <div className="hero-section__image">
                            <img src={blok.image} alt={blok.headline} />
                        </div>
                    )}
                    <div className="hero-section__description">
                        {blok.description}
                    </div>
                </div>
            </div>
        </SbEditable>
    )
};

export default HeroSection;