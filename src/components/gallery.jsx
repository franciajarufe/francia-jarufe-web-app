import React from 'react';

const GalleryImage = ({ title, largeImage, smallImage }) => {
  return (
    <div className="gallery-item">
      <a href={largeImage} target="_blank" rel="noopener noreferrer" className="image-container">
        <img 
          src={smallImage} 
          alt={title}
          className="gallery-image"
        />
        <div className="image-overlay">
          <div className="image-title">{title}</div>
        </div>
      </a>
    </div>
  );
};

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Lugares turisticos en Irlanda</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontWeight:  'bold' }}>
          Descubre la magia de Irlanda.
          </p>
        </div>
        
        <div className="gallery-grid">
          {props.data
            ? props.data.map((d, i) => (
                <GalleryImage
                  key={`${d.title}-${i}`}
                  title={d.title}
                  largeImage={d.largeImage}
                  smallImage={d.smallImage}
                />
              ))
            : "Loading..."}
        </div>
      </div>

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1rem;
          padding: 1rem;
        }

        @media (min-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .gallery-item {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .image-container {
          position: relative;
          width: 100%;
          padding-top: 75%;
          overflow: hidden;
          display: block;
          cursor: pointer;
        }

        .gallery-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.1);
        }

        .gallery-item:hover .image-overlay {
          opacity: 1;
        }

        .image-title {
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          text-align: center;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Gallery;