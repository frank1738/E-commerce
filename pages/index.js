import React from 'react';
import { Product, FooterBanner, Banner } from '../components';
import { client } from '../lib/client';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <Banner banner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Discover your favourite Gadgets</h2>
        <p>Gadgets of your choice</p>
      </div>
      <div className="products-container">
        {products?.map((item) => item.name)}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannreQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannreQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
