import React,{useState} from 'react'
import img1 from '../images/img-1.jfif';
import img2 from '../images/img-2.jfif';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jfif';
import img5 from '../images/img-5.jfif';
import img6 from '../images/img-6.jfif';


const ProductImg=()=>{

    const images = [img1 , img2 , img3, img4 , img5 ,img6];
    const [selectedImg , setSelectedImg] = useState(0);
    return(
        <div style={{display:'flex'}}>
            <div style={{
                height:'300px' , 
                overflowY:'auto',
                listStyle:'none',
                '&::-webkit-scrollbar': {
                    width: '0.4em'
                  },
                  '&::-webkit-scrollbar-track': {
                    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0,0,0,.1)',
                    outline: '1px solid slategrey'
                  }
        }}>
                {
                    images.map((image,index)=>{
                        return <div onClick={()=>setSelectedImg(index)}>
                            <img width="50" height="50" src={image}/>
                        </div>
                    })
                }
            </div>
            <div>
                <img width="300" height="300" src={images[selectedImg]}/>
            </div>
        </div>
    )
}

export default ProductImg;