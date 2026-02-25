import React, { useEffect, useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "2.5rem",
      justifyContent: "center",
      alignItems: "flex-start",
      maxWidth: 1200,
      margin: "0 auto 48px auto",
      width: '100%'
    }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1.5px solid #d6c8f7",
            background: "#fff",
            padding: 28,
            borderRadius: 20,
            width: 320,
            minHeight: 370,
            boxShadow: "0 6px 32px #e6e6fa55, 0 1.5px 0 #e6e6fa",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 32,
            transition: "transform 0.18s, box-shadow 0.18s",
            fontFamily: 'Segoe UI, Arial, sans-serif',
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.012)';
            e.currentTarget.style.boxShadow = '0 12px 32px #bbaeea99, 0 2px 0 #bbaeea';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = '';
            e.currentTarget.style.boxShadow = '0 6px 32px #e6e6fa55, 0 1.5px 0 #e6e6fa';
          }}
        >
          <div style={{
            width: '100%',
            height: 170,
            background: '#f6f3fd',
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 22,
            overflow: 'hidden',
            boxShadow: '0 1px 8px #e6e6fa33',
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                maxWidth: '90%',
                maxHeight: 150,
                objectFit: 'contain',
                borderRadius: 10,
                background: 'transparent',
              }}
            />
          </div>
          <h3 style={{ color: "#7c5fc9", fontWeight: 700, fontSize: "1.22rem", margin: "10px 0 8px 0", letterSpacing: 0.5 }}>{product.name}</h3>
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              background: "linear-gradient(90deg, #bbaeea 0%, #7c5fc9 100%)",
              padding: "11px 28px",
              borderRadius: 7,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1.05rem",
              marginTop: 16,
              boxShadow: "0 2px 8px #bbaeea33",
              transition: "background 0.2s, transform 0.2s",
              display: "inline-block",
              border: "none",
              outline: "none",
              letterSpacing: 0.5,
            }}
            onMouseOver={e => e.currentTarget.style.background = '#7c5fc9'}
            onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #bbaeea 0%, #7c5fc9 100%)'}
          >
            Order Now 
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;