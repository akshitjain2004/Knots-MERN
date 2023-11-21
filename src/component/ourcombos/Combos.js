// CombosPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Combos.css'; // Add styles in Combos.css

const CombosPage = () => {
  const combos = [
    { id: 1, name: 'Silver Combo', description: 'The Silver Combo offers a classic and elegant wedding experience. Perfect for those seeking simplicity with a touch of sophistication. Our Silver Combo includes a beautifully decorated venue, a curated selection of floral arrangements, and a delectable three-course meal. This package ensures a memorable celebration without compromising on style.', price: 'Rs. 2,000,000' },
    { id: 2, name: 'Gold Combo', description: 'Elevate your wedding celebration with our Gold Combo, designed for those who desire a luxurious and opulent experience. The Gold Combo includes a stunning venue adorned with premium floral arrangements, personalized wedding decor, and a gourmet five-course meal. Enjoy the services of a dedicated event coordinator to ensure every detail is meticulously planned, creating a day that reflects your unique style.', price: 'Rs. 4,000,000' },
    { id: 3, name: 'Platinum Combo', description: 'Indulge in the epitome of luxury with our Platinum Combo. Tailored for those who want a truly extravagant celebration, this package offers a lavish venue, extravagant floral designs, custom-made decor, and a gourmet dining experience. With VIP treatment throughout, including a personal concierge and exclusive add-ons, the Platinum Combo is the ultimate choice for a grand and unforgettable wedding.', price: 'Rs. 6,000,000' },
    // Add more combos as needed
  ];

  return (
    <div className="combos-container">
      <h1>Wedding Combos</h1>

      {combos.map((combo) => (
        <div key={combo.id} className="combo-item">
          <h2>{combo.name}</h2>
          <p className="combo-description">{combo.description}</p>
          <p className="combo-price">Price: {combo.price}</p>
          <Link to={`/booking/${combo.id}`} className="book-now-button">
            Book Now
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CombosPage;
