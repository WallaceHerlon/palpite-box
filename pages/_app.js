import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto">
                <Component {...pageProps} />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MyApp