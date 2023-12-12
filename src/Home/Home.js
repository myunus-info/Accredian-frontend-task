import React from 'react';
import Layout from '../Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <div
        style={{
          backgroundColor: 'lightblue',
          height: '85vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>This is homepage</h1>
      </div>
    </Layout>
  );
};

export default Home;
