import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Rating , Typography} from '@mui/material'

const ProductHeader=({productDetails})=>{

    const {name , category , ratings , price} = productDetails;

    return (
        <div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',margin:'2vw'}}>
                <div>
                    <div style={{fontSize:'40px',fontWeight:'600'}} className='product-title'>{name}</div>
                    <div style={{fontSize:'20px'}} className='product-category'>{category}</div>
                </div>
                <div>
                    <FavoriteBorderIcon />
                </div>
            </div>
            <div style={{display:'flex' , justifyContent:'space-around'}}>
                <Rating name="half-rating-read" value={ratings} precision={0.1} readOnly />
                <Typography component="legend">{ratings}</Typography>
                <a href="#">Build my project</a>
                <div>{price} per sheet</div>
            </div>
        </div>
    )
}

export default ProductHeader;

