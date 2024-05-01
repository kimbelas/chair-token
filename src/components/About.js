import React from 'react';
import './About.css';
import collectionImage from '../images/chair-1.png';

export default function About() {
  return (
    <section className="about">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 about-image">
            <img src={collectionImage} className="img-fluid" alt="Collection" />
          </div>
          <div className="col-md-6 panel-content justify-content-center">
            <h3 className="about-title">
              ABOUT
              <br />
              <span>CHAIR</span>
            </h3>
            <p className="about-content">
              Introducing ChairCoin (CHAIR) – the pioneering digital currency of
              the design and furniture world, built on the Solana blockchain.
            </p>
            <p className="about-content">
              {' '}
              ChairCoin (CHAIR) represents a groundbreaking integration of
              digital currency with the design and furniture industry, operating
              on the efficient Solana blockchain. This cryptocurrency is not
              just a medium of exchange but also a novel concept in seating
              design, emphasizing a blend of artistic form, practical function,
              and financial utility. Users can engage in a new
              ecosystem where design meets decentralized finance, offering
              stakeholders unique opportunities to invest in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}