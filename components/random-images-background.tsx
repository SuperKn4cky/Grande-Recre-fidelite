"use client"

import { useState, useEffect, useRef } from "react"

// Array of toy image paths
const toyImageUrls = [
  '/jouets/avion.png',
  '/jouets/balle.png',
  '/jouets/chenille.png',
  '/jouets/cheval.png',
  '/jouets/cube.png',
  '/jouets/dino.png',
  '/jouets/jouet.png',
  '/jouets/puzzle.png',
  '/jouets/train.png',
  '/jouets/voiture.png',
];

// Define the type for our image objects
interface BackgroundImage {
  id: number;
  url: string;
  posX: number;
  posY: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  opacity: number;
}

// RandomImagesBackground component
const RandomImagesBackground = () => {
  const [images, setImages] = useState<BackgroundImage[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const imagesRef = useRef<BackgroundImage[]>([]);
  const numberOfImages = 30; // Number of images to display
  
  // Generate initial images
  useEffect(() => {
    // Generate images with random positions
    const generatedImages: BackgroundImage[] = [];
    
    for (let i = 0; i < numberOfImages; i++) {
      // Random position
      const posX = Math.random() * 100; // X position in percentage
      const posY = Math.random() * 100; // Y position in percentage
      
      // Random initial rotation
      const rotation = Math.random() * 360;
      
      // Random rotation speed (degrees per scroll pixel)
      const rotationSpeed = ((Math.random() * 0.5) - 0.25) * 0.4; // Slower rotation
      
      // Random size
      const scale = 0.5 + Math.random() * 1;
      
      // Random image from available URLs
      const imageUrl = toyImageUrls[Math.floor(Math.random() * toyImageUrls.length)];
      
      // Random opacity
      const opacity = 0.1 + Math.random() * 0.2; // Reduced opacity for background
      
      generatedImages.push({
        id: i,
        url: imageUrl,
        posX,
        posY,
        rotation,
        rotationSpeed,
        scale,
        opacity
      });
    }
    
    imagesRef.current = generatedImages;
    setImages(generatedImages);
  }, []);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      const scrollDelta = newScrollY - scrollY;
      setScrollY(newScrollY);
      
      // Only update if there's actual scroll movement
      if (scrollDelta !== 0) {
        // Update image rotations based on scroll change
        setImages(prevImages => 
          prevImages.map(img => ({
            ...img,
            rotation: img.rotation + (scrollDelta * img.rotationSpeed)
          }))
        );
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);
  
  return (
    <div className="fixed inset-0 overflow-hidden z-[-1]">
      {/* Container for the repeating pattern */}
      <div className="absolute inset-0 bg-repeat" style={{ backgroundSize: '400px 400px' }}>
        {/* Individual images */}
        {images.map(img => (
          <div
            key={img.id}
            className="absolute"
            style={{
              left: `${img.posX}%`,
              top: `${img.posY}%`,
              transform: `rotate(${img.rotation}deg) scale(${img.scale})`,
              opacity: img.opacity,
              transition: 'transform 0.1s ease-out' // Smooth transition for rotation
            }}
          >
            <img 
              src={img.url} 
              alt={`Toy element ${img.id}`}
              className="w-16 h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomImagesBackground;
