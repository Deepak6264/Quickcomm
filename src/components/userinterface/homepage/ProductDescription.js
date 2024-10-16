import { serverURL } from "../../../services/FetchNodeAdminServices";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { Divider, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export default function ProductDescription()
{
    var star=["st1.SVG","st2.SVG","st3.SVG","st4.SVG","st5.SVG"]

    
    var data=[{productdetailname:'Sprite', weight:750, weighttype:'ml', packagingtype:'bottle', noofqty:1,
        stock:5, price:45,offerprice:33, offertype:'Festival', picture:'sp1.webp',   productstatus:'Treanding'},]


    const showStar=()=>{
        return star.map((item,i)=>{
            return(<div>
                <img src={`${serverURL}/images/${item}`} style={{width:22}} />
            </div>)
        })
    }

    
    

    const showImages=()=>{
        return data.map((item,i)=>{

            var op=parseInt(((item.price-item.offerprice)/item.price)*100)

    return(<div style={{}}>
        <div style={{fontSize:20,fontWeight:500,marginBottom:20}} >
            {item.productdetailname} {item.weight} {item.weighttype}
        </div>

        <div style={{fontSize:20,fontWeight:500,display:'flex'}} >

            <div style={{display:'flex'}} >
            {showStar()}
            </div>

            <div style={{marginLeft:'auto',width:35}} >
                <FavoriteBorderIcon/> 
            </div>

            <div>
                <ShareIcon/>
            </div>

        </div>

        <div style={{fontSize:24,fontWeight:'bold', lineHeight:1.428571428, letterSpacing:-0.7,marginBottom:25}} >
             <div style={{display:'flex'}}><span>&#8377;{item.offerprice}</span><span style={{width:'10%',borderRadius:4,background:'#e5f7ee',color:'#03753c',fontWeight:700,fontSize:16,margin:2,display:'flex',alignItems:'center',justifyContent:'center',marginLeft:12}}>{op}% OFF</span></div>

             <div style={{fontSize:16,fontWeight:500,color:'rgba(0, 0, 0, .65)',lineHeight:1.428571428, letterSpacing:-0.7,marginTop:3}}>
                M.R.P:  <span><s>&#8377;{item.price}</s></span>
             </div>
        </div>

        <Divider/>

        <div style={{fontSize:24,fontWeight:900, lineHeight:1.428571428, letterSpacing:-0.7,marginTop:10}}>
            Packsize
        </div>

        <div style={{width:'90%',height:65,borderRadius:16,border:'1px solid ',margin:10,display:'flex'}}>

            <div style={{display:'flex',alignItems:'center'}}>
            <Radio/><img src={`${serverURL}/images/sp1.webp`} style={{width:50}}/> <span style={{fontSize:16,fontWeight:500}}>Pack Of 1</span>
            </div>

            <div style={{marginLeft:'60%',marginTop:5,fontSize:16,fontWeight:700}}>
            <span style={{}}>&#8377;{item.offerprice}</span>  <span style={{color:'grey'}}><s>&#8377;{item.price}</s></span> <span style={{borderRadius:4,background:'#e5f7ee',color:'#03753c',fontSize:12,display:'flex',alignItems:'center',justifyContent:'center',marginTop:5}}>{op}% OFF</span>
            </div>

        </div>

        <Divider style={{marginTop:25}}/>

        <div style={{fontSize:24,fontWeight:900, lineHeight:1.428571428, letterSpacing:-0.7,marginTop:10}}>
            Size
        </div>

        
         <div style={{width:'90%',height:65,borderRadius:16,border:'1px solid ',margin:10,display:'flex'}}>

            <div style={{display:'flex',alignItems:'center'}}>
            <Radio/><img src={`${serverURL}/images/sp1.webp`} style={{width:50}}/> <span style={{fontSize:16,fontWeight:500}}>2 L </span>
            </div>

            <div style={{marginLeft:'60%',marginTop:5,fontSize:16,fontWeight:700}}>
            <span style={{}}>&#8377;{item.offerprice}</span>  <span style={{color:'grey'}}><s>&#8377;{item.price}</s></span> <span style={{borderRadius:4,background:'#e5f7ee',color:'#03753c',fontSize:12,display:'flex',alignItems:'center',justifyContent:'center',marginTop:5}}>{op}% OFF</span>
            </div>

        </div>

        
         <div style={{width:'90%',height:65,borderRadius:16,border:'1px solid ',margin:10,display:'flex'}}>

            <div style={{display:'flex',alignItems:'center'}}>
            <Radio/><img src={`${serverURL}/images/sp1.webp`} style={{width:50}}/> <span style={{fontSize:16,fontWeight:500}}>250 ml</span>
            </div>

            <div style={{marginLeft:'60%',marginTop:5,fontSize:16,fontWeight:700}}>
            <span style={{}}>&#8377;{item.offerprice}</span>  <span style={{color:'grey'}}><s>&#8377;{item.price}</s></span> <span style={{borderRadius:4,background:'#e5f7ee',color:'#03753c',fontSize:12,display:'flex',alignItems:'center',justifyContent:'center',marginTop:5}}>{op}% OFF</span>
            </div>


        </div>


         <div style={{width:'90%',height:65,borderRadius:16,border:'1px solid ',margin:10,display:'flex'}}>

            <div style={{display:'flex',alignItems:'center'}}>
            <Radio/><img src={`${serverURL}/images/sp1.webp`} style={{width:50}}/> <span style={{fontSize:16,fontWeight:500}}>600 ml</span>
            </div>

            <div style={{marginLeft:'60%',marginTop:5,fontSize:16,fontWeight:700}}>
            <span style={{}}>&#8377;{item.offerprice}</span>  <span style={{color:'grey'}}><s>&#8377;{item.price}</s></span> <span style={{borderRadius:4,background:'#e5f7ee',color:'#03753c',fontSize:12,display:'flex',alignItems:'center',justifyContent:'center',marginTop:5}}>{op}% OFF</span>
            </div>

        </div>


         <div style={{width:'90%',height:65,borderRadius:16,border:'1px solid ',margin:10,display:'flex'}}>

            <div style={{display:'flex',alignItems:'center'}}>
            <Radio/><img src={`${serverURL}/images/sp1.webp`} style={{width:50}}/> <span style={{fontSize:16,fontWeight:500}}>700 ml</span>
            </div>

            <div style={{marginLeft:'60%',marginTop:5,fontSize:16,fontWeight:700}}>
            <span style={{}}>&#8377;{item.offerprice}</span>  <span style={{color:'grey'}}><s>&#8377;{item.price}</s></span> <span style={{borderRadius:4,background:'#e5f7ee',color:'#03753c',fontSize:12,display:'flex',alignItems:'center',justifyContent:'center',marginTop:5}}>{op}% OFF</span>
            </div>

        </div>


         <div style={{width:'90%',height:65,borderRadius:16,border:'1px solid ',margin:10,display:'flex'}}>

            <div style={{display:'flex',alignItems:'center'}}>
            <Radio/><img src={`${serverURL}/images/sp1.webp`} style={{width:50}}/> <span style={{fontSize:16,fontWeight:500}}>1.125 L</span>
            </div>

            <div style={{marginLeft:'60%',marginTop:5,fontSize:16,fontWeight:700}}>
            <span style={{}}>&#8377;{item.offerprice}</span>  <span style={{color:'grey'}}><s>&#8377;{item.price}</s></span> <span style={{borderRadius:4,background:'#e5f7ee',color:'#03753c',fontSize:12,display:'flex',alignItems:'center',justifyContent:'center',marginTop:5}}>{op}% OFF</span>
            </div>

        </div>


<Divider style={{marginTop:25}}/>


        <div style={{fontSize:24,fontWeight:900, lineHeight:1.428571428, letterSpacing:-0.7,marginTop:10}}>
            Offers(8)
        </div>



<Divider style={{marginTop:25}}/>


        <div style={{fontSize:24,fontWeight:900, lineHeight:1.428571428, letterSpacing:-0.7,marginTop:10}}>
        Deliver to
        </div>

        <div style={{fontSize:16,fontWeight:500,lineHeight:1.428571428, letterSpacing:-0.7,marginTop:10}}>
            <span>580024</span> <span style={{color: 'rgba(0, 0, 0, .65)',marginLeft:10}}>Dharwad</span><span style={{marginLeft:'80%'}}><EditIcon/></span>
        </div>



        <div style={{fontSize:16,fontWeight:700, lineHeight:1.428571428, letterSpacing:-0.7}}>
          <span style={{color:'#25ab21'}}>In Stock</span> <span>Delivery by tomorrow</span>
        </div>


<Divider style={{marginTop:25}}/>


        <div style={{fontSize:24,fontWeight:900, lineHeight:1.428571428, letterSpacing:-0.7,marginTop:10}}>
         Sold by
       </div>

        <div style={{fontSize:18,fontWeight:700, lineHeight:1.428571428, letterSpacing:-0.7,marginTop:10,color:'#0c5273'}}>
          Reliance Retail
        </div>


        
<Divider style={{marginTop:25}}/>


        <div style={{fontSize:24,fontWeight:900, lineHeight:1.428571428, letterSpacing:-0.7,marginTop:10}}>
          Features & Details
       </div>

       <div style={{color:'rgba(0, 0, 0, .65)',marginTop:10}}>
       Packed in hygienic conditions
       </div>


       
<Divider style={{marginTop:25}}/>


        <div style={{fontSize:24,fontWeight:900, lineHeight:1.428571428, letterSpacing:-0.7,marginTop:10}}>
        Description
       </div>

       <div style={{width:'80%',fontSize:16,fontWeight:500}}>
      <div style={{color:'rgba(0, 0, 0, .65)'}}> Delight your guests with Sprite. It is the perfect drink for any weather. Gatherings are incomplete without it.
         One glass is never enough! So go ahead buy this product online today.</div>

Disclaimer: 

    <div style={{color:'rgba(0, 0, 0, .65)'}}>Despite our attempts to provide you with the most accurate information possible, the actual packaging, ingredients and
     colour of the product may sometimes vary. Please read the label, directions and warnings carefully before use.</div>
       </div>


<Divider style={{marginTop:25}}/>


        <div style={{fontSize:16,fontWeight:700, lineHeight:1.428571428, letterSpacing:-0.7,marginTop:20,padding:10}}>
        Article ID: 491085934
       </div>


    </div>)
 })

    }


    return(<div>
        {showImages()}
    </div>)
}