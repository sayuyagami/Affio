import React from "react";
import ProductsList from "./ProductsList";


function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        background: 'linear-gradient(135deg, #e6e6fa 0%, #fff 100%)',
        padding: '0',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontFamily: 'cursive',
          color: '#7c5fc9',
          fontWeight: 'bold',
          fontSize: '3.2rem',
          marginTop: 48,
          marginBottom: 40,
          letterSpacing: 2,
          textShadow: '0 2px 8px #e6e6fa',
        }}
      >
        Crave It
      </h1>
      <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif', fontSize: '1rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <ProductsList />
      </div>
    </div>
  );
}

export default App;
