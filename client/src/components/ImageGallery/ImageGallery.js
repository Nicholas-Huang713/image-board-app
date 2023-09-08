// src/components/ImageGallery.js
import React from 'react';
import './ImageGallery.scss';

const images = [
    {
        src: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg',
        alt: 'dog',

    },
    {
        src: 'https://encrypted-tbn1.https://www.cnet.com/a/img/resize/e35a48123c960e24a3f19d884f717a4f178f8485/hub/2022/10/10/c1c115f1-e42a-4c7c-a856-243130d29671/labradorretriever.jpg?auto=webp&fit=crop&height=675&width=1200.com/licensed-image?q=tbn:ANd9GcRWWl0PO7qFWCsi9Wvf57JmYbfLEWqWWx1mBqinse1nEvEnyomeU-Uuq_3snC1fh_nr50svczyRaZbOvBk',
        alt: 'dog',

    },
    {
        src: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRWWl0PO7qFWCsi9Wvf57JmYbfLEWqWWx1mBqinse1nEvEnyomeU-https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg',
        alt: 'dog',

    },
    {
        src: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg',
        alt: 'dog',

    },
    {
        src: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRWWl0PO7qFWCsi9Wvf57JmYbfLEWqWWx1mBqinse1nEvEnyomeU-Uuq_3snC1fh_nr50svczyRaZbOvBk',
        alt: 'dog',

    },
    {
        src: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRWWl0PO7qFWCsi9Wvf57JmYbfLEWqWWx1mBqinse1nEvEnyomeU-Uuq_3snC1fh_nr50svczyRaZbOvBk',
        alt: 'dog',

    },
    {
        src: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRWWl0PO7qFWCsi9Wvf57JmYbfLEWqWWx1mBqinse1nEvEnyomeU-Uuq_3snC1fh_nr50svczyRaZbOvBk',
        alt: 'dog',

    },
    {
        src: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRWWl0PO7qFWCsi9Wvf57JmYbfLEWqWWx1mBqinse1nEvEnyomeU-Uuq_3snC1fh_nr50svczyRaZbOvBk',
        alt: 'dog',

    },
    {
        src: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg',
        alt: 'dog',

    },
    {
        src: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRWWl0PO7qFWCsi9Wvf57JmYbfLEWqWWx1mBqinse1nEvEnyomeU-Uuq_3snC1fh_nr50svczyRaZbOvBk',
        alt: 'dog',

    },
    {
        src: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRWWl0PO7qFWCsi9Wvf57JmYbfLEWqWWx1mBqinse1nEvEnyomeU-Uuq_3snC1fh_nr50svczyRaZbOvBk',
        alt: 'dog',

    },
    {
        src: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRWWl0PO7qFWCsi9Wvf57JmYbfLEWqWWx1mBqinse1nEvEnyomeU-Uuq_3snC1fh_nr50svczyRaZbOvBk',
        alt: 'dog',

    },
]

const ImageGallery = ({  }) => {
    
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
