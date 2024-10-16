import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverURL } from "../../../services/FetchNodeAdminServices";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { setRef } from "@mui/material";
import { grey } from "@mui/material/colors";
import PlusMinusButton from "./PlusMinusButton";
export default function ProductsScroll({title}) {
  var scrollRef = useRef();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
  };

  var data = [
    {
      productdetailname: "Sunfeast Dark Fantasy Original Choco Filled Cookie",
      weight: 250,
      weighttype: "gm",
      packagingtype: "1",
      noofqty: "1",
      stock: 5,
      price: 99,
      offerprice: 0,
      offertype: "Festival",
      productstatus: "Trending",
      picture: "dark.webp",
    },
    {
      productdetailname: "Good Life Refined Rice Bran Oil",
      weight: 250,
      weighttype: "gm",
      packagingtype: "1",
      noofqty: "1",
      stock: 5,
      price: 420,
      offerprice: 390,
      offertype: "Festival",
      productstatus: "Trending",
      picture: "rice.webp",
    },
    {
      productdetailname: "Good Life Chakki Aata",
      weight: 250,
      weighttype: "gm",
      packagingtype: "1",
      noofqty: "1",
      stock: 5,
      price: 99,
      offerprice: 80,
      offertype: "Festival",
      productstatus: "Trending",
      picture: "chakki.webp",
    },

    {
      productdetailname: "Tata Tea Premium Desh Ki Chai",
      weight: 250,
      weighttype: "gm",
      packagingtype: "1",
      noofqty: "1",
      stock: 5,
      price: 99,
      offerprice: 80,
      offertype: "Festival",
      productstatus: "Trending",
      picture: "tea.webp",
    },

    {
      productdetailname: "Surf Excel Easy Wash Detergent Powder",
      weight: 250,
      weighttype: "gm",
      packagingtype: "1",
      noofqty: "1",
      stock: 5,
      price: 99,
      offerprice: 80,
      offertype: "Festival",
      productstatus: "Trending",
      picture: "surfexcel.jpg",
    },

    {
      productdetailname: "Good Life Jeera",
      weight: 250,
      weighttype: "gm",
      packagingtype: "1",
      noofqty: "1",
      stock: 5,
      price: 99,
      offerprice: 80,
      offertype: "Festival",
      productstatus: "Trending",
      picture: "jeera.webp",
    },

    {
      productdetailname: "Rin Detergent Powder",
      weight: 250,
      weighttype: "gm",
      packagingtype: "1",
      noofqty: "1",
      stock: 5,
      price: 99,
      offerprice: 80,
      offertype: "Festival",
      productstatus: "Trending",
      picture: "rin.webp",
    },

    {
      productdetailname: "Vim Lemon Dishwash Liquid",
      weight: 250,
      weighttype: "gm",
      packagingtype: "1",
      noofqty: "1",
      stock: 5,
      price: 99,
      offerprice: 80,
      offertype: "Festival",
      productstatus: "Trending",
      picture: "vim.webp",
    },
    {
      productdetailname: "Amul Pure Desi Ghee",
      weight: 250,
      weighttype: "gm",
      packagingtype: "1",
      noofqty: "1",
      stock: 5,
      price: 99,
      offerprice: 80,
      offertype: "Festival",
      productstatus: "Trending",
      picture: "amulpureghee.webp",
    },
  ];

  const showImages = () => {
    return data.map((item) => {
        var op=parseInt(((item.price-item.offerprice)/item.price)*100)
      return (
        <div style={{ display: "flex", flexDirection: "column"}}>
        
        <div style={{ alignSelf:'center' }}>
          <img
            src={`${serverURL}/images/${item.picture}`}
            style={{ width:'60%', borderRadius: 10 }}
          />
          </div>

        
          <div
            style={{
                fontWeight:500,
                fontSize: 14,
                letterSpacing: -0.07,
                lineHeight: 1.428571428,
              width: "70%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
             
            }}
          >
            {item.productdetailname}
          </div>

          {item.productdetailname.length<=24?<div style={{  fontWeight:500,
                fontSize: 14,
                letterSpacing: -0.07,
                lineHeight: 1.428571428,}}>&nbsp;</div>:<></>}
          <div   style={{
                fontWeight:500,
                fontSize: 14,
                letterSpacing: -0.07,
                lineHeight: 1.428571428,
          }}>
            {item.weight} {item.weighttype}
          </div>
          {item.offerprice>0?<div style={{marginTop:7,display:'flex',flexDirection:'column'}}>
          <div   style={{
                fontWeight:500,
                fontSize: 14,
                letterSpacing: -0.07,
                lineHeight: 1.428571428,
          }}>
             <span>&#8377;</span>{item.offerprice}
          </div>
          <div   style={{
                fontWeight:500,
                fontSize: 14,
                letterSpacing: -0.07,
                lineHeight: 1.428571428,
                color:'grey'
          }}>
            <div style={{display:'flex',alignItems:'center',fontSize:12}}> <s><span>&#8377;{item.price}</span></s><span style={{margin:5,width:60,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:2,background:'#e5f7ee',color:'#03753c'}}>{op}% OFF</span></div>
          </div>
          
          </div>:<div> <div   style={{
            marginTop:7,
                fontWeight:500,
                fontSize: 14,
                letterSpacing: -0.07,
                lineHeight: 1.428571428,
             
          }}>
             <span>&#8377;</span>{item.price}
             
          </div>
          <div style={{   lineHeight: 1.428571428,}}>&nbsp;</div>      
          </div>}
        
          <div>
            <PlusMinusButton/>
          </div>
          </div>
        
        
      );
    });
  };
  const handleNext = () => {
    scrollRef.current.slickNext();
  };

  const handlePrev = () => {
    scrollRef.current.slickPrev();
  };

  return (
    <div>
      <div style={{fontWeight: 900,
    textTransform: 'capitalize',
    fontSize:24,
    letterSpacing:-0.72,
    lineHeight: 1,
    color: '#141414',
   }}>{title}</div>
    <div style={{ position: "relative" }}>
      {matches ? (
        <div
          onClick={handleNext}
          style={{
            top: "43%",
            left: "0.3%",
            zIndex: 2,
            position: "absolute",
            background: "#b2bec3",
            opacity: 0.5,
            width: 30,
            height: 30,
            borderRadius: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <KeyboardArrowLeftIcon style={{ color: "#fff" }} />
        </div>
      ) : (
        <div></div>
      )}

      <Slider ref={scrollRef} {...settings}>
        {showImages()}
      </Slider>

      {matches ? (
        <div
          onClick={handlePrev}
          style={{
            top: "43%",
            right: "2.8%",
            zIndex: 2,
            position: "absolute",
            opacity: 0.5,
            background: "#b2bec3",
            width: 30,
            height: 30,
            borderRadius: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <KeyboardArrowRightIcon style={{ color: "#fff" }} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
    </div>
  );
}
