
import React, { useEffect, useState } from "react";

const headerStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.95)',
  boxShadow: '0 2px 16px #e6e6fa33',
  padding: '24px 0 12px 0',
  marginBottom: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: '1.5px solid #e6e6fa',
};

const navBrandStyle = {
  fontFamily: 'Poppins, Segoe UI, Arial, sans-serif',
  fontWeight: 800,
  fontSize: '2.5rem',
  color: '#7c5fc9',
  letterSpacing: 2,
  textShadow: '0 2px 8px #bbaeea33',
};

const footerStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.97)',
  boxShadow: '0 -2px 16px #e6e6fa33',
  padding: '18px 0',
  marginTop: 48,
  textAlign: 'center',
  color: '#a49ad6',
  fontFamily: 'Segoe UI, Arial, sans-serif',
  fontSize: '1rem',
  borderTop: '1.5px solid #e6e6fa',
};

const cardStyle = {
  border: "none",
  background: "#fff",
  padding: 28,
  borderRadius: 24,
  width: 340,
  minHeight: 410,
  boxShadow: "0 8px 32px #bbaeea22, 0 1.5px 0 #e6e6fa",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 32,
  transition: "transform 0.18s, box-shadow 0.18s",
  fontFamily: 'Segoe UI, Arial, sans-serif',
  position: 'relative',
  overflow: 'hidden',
};

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f6f3fd 0%, #e6e6fa 100%)' }}>

      {/* Product Cards */}
      <main style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2.5rem",
        justifyContent: "center",
        alignItems: "flex-start",
        maxWidth: 1300,
        margin: "0 auto 48px auto",
        width: '100%'
      }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={cardStyle}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.018)';
              e.currentTarget.style.boxShadow = '0 16px 48px #bbaeea55, 0 2px 0 #bbaeea';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = cardStyle.boxShadow;
            }}
          >
            <div style={{
              width: '100%',
              height: 200,
              background: 'linear-gradient(135deg, #f6f3fd 60%, #e6e6fa 100%)',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 22,
              overflow: 'hidden',
              boxShadow: '0 2px 12px #e6e6fa33',
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: 180,
                  objectFit: 'cover',
                  borderRadius: 12,
                  background: 'transparent',
                  boxShadow: '0 2px 12px #bbaeea22',
                }}
              />
            </div>
            <h3 style={{
              color: "#7c5fc9",
              fontWeight: 800,
              fontSize: "1.18rem",
              margin: "10px 0 8px 0",
              letterSpacing: 0.5,
              textAlign: 'center',
              minHeight: 56,
              lineHeight: 1.25,
            }}>{product.name}</h3>
            <a
              href={product.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                background: "linear-gradient(90deg, #bbaeea 0%, #7c5fc9 100%)",
                padding: "13px 32px",
                borderRadius: 9,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.08rem",
                marginTop: 18,
                boxShadow: "0 2px 12px #bbaeea33",
                transition: "background 0.2s, transform 0.2s",
                display: "inline-block",
                border: "none",
                outline: "none",
                letterSpacing: 0.5,
                textAlign: 'center',
                cursor: 'pointer',
              }}
              onMouseOver={e => e.currentTarget.style.background = '#7c5fc9'}
              onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #bbaeea 0%, #7c5fc9 100%)'}
            >
              Order Now
            </a>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        &copy; {new Date().getFullYear()} Crave It. All rights reserved.
      </footer>
    </div>
  );
};

export default ProductsList;