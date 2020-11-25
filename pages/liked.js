import React from 'react';
import Layout from '../components/Layout';
import { ReactReduxContext } from 'react-redux';

const Liked = () => {
    return (
        <ReactReduxContext.Consumer>
            {
                (store) => {
                    const likedPosts = store.store.getState().likePosts;
                    return (
                        <Layout>
                            <main id="main">
                                {
                                    !likedPosts.length ? (
                                        <h5>You haven't liked any posts yet. Please, like posts.</h5>
                                    ) : (
                                        <>
                                            <h5>This posts are interesting for you.</h5>
                                            <ul className="collection">
                                                {
                                                    likedPosts.map((post, idx) => <li key={idx} className="collection-item">{post}</li>)
                                                }
                                            </ul>
                                        </>
                                    )
                                }
                            </main>
                        </Layout>
                    );
                }
            }
        </ReactReduxContext.Consumer>
    );
};

export default Liked;