import DynamicComponent from '../DynamicComponent'
import SbEditable from 'storyblok-react'

const Grid = ({blok}) => (
    <SbEditable content={blok}>
        <ul className="flex">
            {blok.columns.map((nestedBlok) => (
                    <li key={nestedBlok._uid}>
                        <DynamicComponent blok={nestedBlok} />
                    </li>
                )
            )}
        </ul>
    </SbEditable>
);

export default Grid;