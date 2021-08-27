import React from 'react'
import Shop from './Shop'
import Contact from './Contact'
import Offers from './Offers'

function Home(props) {
    return (
        <div>
            <Shop />
            <Offers />
            <Contact />
        </div>
    )
}

export default Home
