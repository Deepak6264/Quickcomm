import Header from './Header'
import OfferScroll from './OfferScroll'
import AdScroll from './AdScroll'
import Footer from './Footer'
import ProductsScroll from './ProductsScroll'
export default function HomePage()
{
    return(<div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
        
        <div style={{width:'82.6%',alignSelf:'center',marginTop:35}} >
        <OfferScroll state={"Offer"} />
        </div>
        
        <div style={{width:'82.6%',alignSelf:'center',marginTop:40}} >
        <OfferScroll state={"Bank"} />
        </div>
        
        
        <div style={{width:'82%',alignSelf:'center',marginTop:40}} >
        <ProductsScroll title={"Top Brands"} />
        </div>
        
        <div style={{width:'82%',alignSelf:'center',marginTop:40}} >
        <ProductsScroll title={"Popular Products"} />
        </div>
        <div style={{width:'82%',alignSelf:'center',marginTop:40}} >
        <AdScroll />
        </div>
        <div style={{width:'82%',alignSelf:'center',marginTop:40}} >
        <Footer />
        </div>
        
         
    </div>)
}