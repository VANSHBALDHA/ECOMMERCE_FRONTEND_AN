import Link from 'next/link';
import React from 'react';

function notFound() {
    return (
        <div className="site-content">
            {/* <HeaderDefault /> */}
            <div className="ps-page--404">
                <div className="container">
                    <div className="ps-section__content">
                        <figure>
                            <img src="/static/img/404.jpg" alt="" />
                            <h3>Ohh! Page not found</h3>
                            <p>
                                It seems we can't find what you're looking for.
                            </p>
                            <Link href="/" className="ps-btn">Go back to Homepage</Link>
                        </figure>
                    </div>
                </div>
            </div>
            {/* <FooterDefault /> */}
        </div>
    );
}

export default notFound;
