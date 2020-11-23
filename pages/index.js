import Link from 'next/link';

function HomePage() {
    return (
        <>
            <nav className='indigo lighten-2 header'>
                <div className="nav-wrapper">
                    <h6  className="brand-logo"><Link href="/"><a>EBSCO constructor</a></Link></h6>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link href='/'><a>Home</a></Link></li>
                        <li><Link href='/posts'><a>Posts</a></Link></li>
                        <li><Link href="/create-post"><a>Create Post</a></Link></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <h1>Welcome to Next.js!</h1>
            </div>
        </>
    );
};

export default HomePage;