import Link from "next/link";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'

const useLike = () => {
    const likePosts = useSelector((state) => state.likePosts);
    return { likePosts }
};

const Navigation = () => {
    const router = useRouter();
    const { likePosts } = useLike();

    const badgeContent = likePosts.length ? (
        <span className="like-badge">{likePosts.length}</span>
    ) : null;
    return (
        <nav className='indigo lighten-2 header'>
            <div className="nav-wrapper">
                <h6  className="brand-logo">
                    <a href="/">
                        EBSCO config
                    </a>
                </h6>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li className={router.pathname === "/" ? "active" : ""}>
                        <Link href='/'><a>Home</a></Link>
                    </li>
                    <li className={router.pathname === "/posts" ? "active" : ""}>
                        <Link href='/posts'><a>Posts</a></Link>
                    </li>
                    <li className={router.pathname === "/liked" ? "active" : ""}>
                        <Link href='/liked'><a>Liked {badgeContent}</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;