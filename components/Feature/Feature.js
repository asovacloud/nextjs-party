import SbEditable from 'storyblok-react'

const Feature = ({blok}) => {
    return (
        <SbEditable content={blok}>
            <div className="text-center">
                <h2>{blok.name}</h2>
            </div>
        </SbEditable>
    )
}

export default Feature;