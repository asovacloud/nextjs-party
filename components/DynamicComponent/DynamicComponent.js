import HeroSection from '../HeroSection'
import Feature from '../Feature'
import Grid from '../Grid'
import Placeholder from '../Placeholder'
import FeaturedPosts from '../FeaturedPosts'

const Components = {
    'hero-section': HeroSection,
    'grid': Grid,
    'feature': Feature,
    'featured-posts': FeaturedPosts
}

const DynamicComponent = ({blok}) => {
    if (typeof Components[blok.component] !== 'undefined') {
        const Component = Components[blok.component]
        return <Component blok={blok} />
    }
    return <Placeholder componentName={blok.component}/>
}

export default DynamicComponent