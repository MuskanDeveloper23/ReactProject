import React from 'react'
import Hero from  '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/offers/offers'
import NewCollections from '../components/newCollections/newCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'


const shop = () =>{
    return(
        <div>
        <Hero/>
        <Popular/>
        <Offers/>
     <NewCollections/>
    <NewsLetter/>
   
        </div>
    )
}

export default shop