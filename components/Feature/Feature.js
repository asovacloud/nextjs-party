import SbEditable from 'storyblok-react'
import DynamicIcon from '../icons/DynamicIcon'

const Feature = ({blok}) => {
    return (
        <SbEditable content={blok}>
            <div className="text-center">
                <div className="feature-list__image">
                    <DynamicIcon type={blok.icon} />
                </div>
                <h2 className="feature-list__title">{blok.name}</h2>
                <div className="feature-list__description">
                    {blok.description}
                </div>
            </div>
        </SbEditable>
    )
}

export default Feature;