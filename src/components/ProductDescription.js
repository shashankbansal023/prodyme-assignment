import React,{useState} from 'react'
import { ButtonGroup,Button } from '@mui/material';

const ProductDescription=()=>{

    const availableQty = 189;

    const [quantity , setQuantity] = useState(0);
    return (
        <div>
            <h2>Product Description</h2>
            <p>
                lorem ipsfjsdklgfdslgndfv nkjdfvndkljfvndkjfv kdjnfvdlkjbndkjbnkjdfbnlkdjfnbkljdnfbkljmdglkbkgjbngkjbnkdjb kdjlbndkjgb kdgjbndklgbjn lkdgjbndklgjbnk bkjdgbnkgdjbn jkdglbnkjdgb
                kldgbnkgjbnkjgbnkjdgbjdgkbnkdjgnbkdj kjdgblndjbgldgkjb dkjbnldgkjlkjgbndkjgbn dlkjgbndkjgbnlkjdg  gkjdbndgkjbnldkgj dkgjlbdlgkbndkjlgbnlkbgj jdgklbngfbkjnlgbj jgkdlnbkjglbndgkbn
                dlknbdglkjbnl kjgbnfbjlfkg jdkglbnklgjbngkjl dkjglbngdlkjbngfklbjnkgjlb lkdgjbnbgkjln gkjdnblgkjbnjkn glkbjndkbljgfnk kgljdnblkjgnlbkjnblkg jkgblkgnlkjngf kjflbnflbgkjnfkjbg kdjnfvdlkjbndkjbnkjdfbnlkdjfnbkljdnfbkljmdglkbkgjbngkjbnkdjbk
                lkngbkjfgnbkj kglbnfgkbndlkjgbnglkjb kgjlbngfbkjn gklbnfgkjjkjgb gkjlbnfgbkjln lfkbnfklbn kfjlbnjlkbnkjnjk jkldbngfbklnfkjbg kldgbngkblnfkglndjfb fdjndlkjbnlgk ljgkdbnlgkjbnlkgjdb
                dglnbkgljbnkgjlf lgdknbfbgkjl
            </p>
            <div style={{display:'flex',marginTop:'2vw',justifyContent:'space-around',alignItems:'center'}}>
                <div>Available <b>{availableQty}</b></div>
                <div style={{display:'flex', gap:'10px'}}>
                    <p>Quantity</p>
                    <ButtonGroup variant="outlined" aria-label="text button group">
                        <Button onClick={()=>setQuantity(quantity - 1)}>-</Button>
                        <Button>{quantity}</Button>
                        <Button onClick={()=>setQuantity(quantity + 1)}>+</Button>
                    </ButtonGroup>
                </div>
                <Button variant="contained" sx={{
                    borderRadius:'15px',
                    backgroundColor:'orange'
                }}>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductDescription;