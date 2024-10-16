import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid, Box } from "@mui/material";
import AdScroll from './AdScroll';
import ProductsScroll from './ProductsScroll';
import { serverURL } from "../../../services/FetchNodeAdminServices";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { setRef } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetailsCategory from './ProductDetailsCategory';
import { Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Scrollitem from './Scrollitem'
import ProductDescription from './ProductDescription'



export default function Showitem() {
  return (
    <>
      <Grid container spacing={0} xs={12} sx={{
        // backgroundColor: '#000',
       

      }}>

        <Grid item xs={12} md={6} sx={{
          marginTop:'45px',

        }}>
          
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/categories">
              All Categories
            </Link>
            <Typography color="textPrimary">
              Realme Narzo N65 5G 128 GB, 4 GB RAM, Dee...
            </Typography>
          </Breadcrumbs>
          <Grid sx={{marginTop:'40px', marginLeft:'100px'}}>
          <Scrollitem /></Grid>
        </Grid>


        <Grid item  xs={12} md={6} >
          <ProductDescription />
        </Grid>
      </Grid>

    </>
  );
}
