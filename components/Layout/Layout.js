import Head from '../../components/Head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <div className="wrapper__holder">
                <Head />
                <Navigation />
                <div className="container">
                    { children }
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Layout;