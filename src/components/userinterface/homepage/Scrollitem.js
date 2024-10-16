import React, { useState } from 'react';
import { Grid, IconButton, Box ,Button} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


// Sample images for demonstration
const images = [
  '/narjo1.webp', // Replace with actual image paths
  '/narjo2.webp',
  '/narzo3.webp',
  '/narzo4.webp',
  '/narzo5.webp',
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]); // Default to the first image
  const [visibleThumbnails, setVisibleThumbnails] = useState(0); // Control which thumbnails are visible

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleScrollUp = () => {
    if (visibleThumbnails > 0) {
      setVisibleThumbnails(visibleThumbnails - 1);
    }
  };

  const handleScrollDown = () => {
    if (visibleThumbnails < images.length - 4) { // Adjust this based on how many thumbnails you want visible
      setVisibleThumbnails(visibleThumbnails + 1);
    }
  };

  return (
    <Grid container spacing={2} sx={{}}>
      {/* Left side: Thumbnail navigation */}
      <Grid item xs={2}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Scroll up button */}
          <IconButton onClick={handleScrollUp}>
            <ArrowUpwardIcon />
          </IconButton>

          {/* Thumbnails */}
          {images.slice(visibleThumbnails, visibleThumbnails + 4).map((image, index) => (
            <Box
              key={index}
              sx={{
                width: 80, // Increased width for thumbnails
                height: 80, // Increased height for thumbnails
                margin: '10px 0',
                border: selectedImage === image ? '2px solid blue' : '1px solid gray',
                cursor: 'pointer',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
              onClick={() => handleThumbnailClick(image)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          ))}

          {/* Scroll down button */}
          <IconButton onClick={handleScrollDown}>
            <ArrowDownwardIcon />
          </IconButton>
        </Box>
      </Grid>

      {/* Right side: Main image display */}
      <Grid item xs={10}>
        <Box
          sx={{
            width: '70%', // Take full width of the grid item
            height: '80vh', // Increased height for main image display
            borderRadius: '10px',
            border: '1px solid lightgray',
            overflow: 'hidden',
            display: 'flex', // Added flex for centering image
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
          }}
        >
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Box>
      </Grid>
      <Grid container spacing={2} justifyContent="flex-end" alignItems="center" height='120px'>
      <Grid item xs={6}  >
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" color="secondary">
          Buy Now
        </Button>
      </Grid>
    </Grid>

    
    </Grid>
  );
};

export default ImageGallery;
