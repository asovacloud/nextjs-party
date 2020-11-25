import Head from '../../components/Head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import StoryblokService from '../../utils/storyblok-service';

const Layout = ({ children }) => {
    return (
        <div class="wrapper">
            <div className="wrapper__holder">
                <Head />
                <Navigation />
                <div className="container">
                    { children }
                </div>
            </div>
            <Footer />
            {StoryblokService.bridge()}
        </div>
    )
};

export default Layout;