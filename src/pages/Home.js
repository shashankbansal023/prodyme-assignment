import React from 'react'
import Tags from '../components/Tags'
import Navigation from '../components/Navigation'
import ProductHeader from '../components/ProductHeader';
import ProductImg from '../components/ProductImg'
import ProductDescription from '../components/ProductDescription';
import ProductSpec from '../components/ProductSpec';

const Home=()=>{

    const tags = ["Kitchen" , "L- Shape" , "Sustainable"];
    const NavigationItems = ["Navigation Item A" , "Navigation Item B" , "Navigation Item C"];

    const productDetails = {
        name : 'Product ABC',
        category:'Product Category ',
        price :'2099',
        ratings :4.4
    }



    return (
        <div style={{display:'flex'}}>
            <div style={{display:'flex', flexDirection:'column',padding:'3vw', gap:'20px' , width:'20%',backgroundColor:'#b2c9d1'}}>
                <div>Home / <b>ProductDetailPage</b></div>
                <div>
                    <Tags tags={tags}/>
                </div>
            </div>
            <div style={{position:'absolute',display:'flex',top:'40%',left:'5%' }}>
                <ProductImg/>
            </div>
            <div style={{display:'flex' , flexDirection:'column', width:'60%',padding:'1vw'}}>
                <div>
                    <Navigation navItems={NavigationItems}/>
                </div>
                <div>
                    <ProductHeader productDetails={productDetails}></ProductHeader>
                </div>
                <div style={{padding:'0 10vw'}}>
                    <ProductDescription></ProductDescription>
                </div>
                <div style={{margin:'5vw'}}>
                    <ProductSpec></ProductSpec>
                </div>
         </div>
        
        </div>
       
    )
}
export default Home;