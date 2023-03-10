import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

import { useState, useEffect } from 'react';

import { gql } from '@apollo/client';

import { getApolloClient } from './api/hello';

const inter = Inter({ subsets: ['latin'] });

const SliderData = [
  {
    image: 'https://scarlettdata.online/wp-content/uploads/2022/10/5.jpg',
  },
  {
    image:
      'https://scarlettdata.online/wp-content/uploads/2022/10/3-scaled.jpg',
  },
  {
    image:
      'https://scarlettdata.online/wp-content/uploads/2022/10/1-1-scaled.jpg',
  },
];

export default function Home({ page, posts }) {
  const [current, setCurrent] = useState(0);

  const [animate, setAnimate] = useState(false);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setAnimate(!animate);
  };

  const handleClick = () => setAnimate(!animate);

  useEffect(() => {
    console.log(current);
  }, [current]);
  return (
    <>
      <Head>
        <title>Scarlett Casciello</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero_section">
        {SliderData.map((slide, index) => {
          return (
            <div className="gallery_section" key={index}>
              {index === current && (
                <>
                  <p class="desktop_logo">Scarlett Casciello</p>
                  <navbar class="navbar-home">
                    <div class="title_option">
                      <a href="/">HOME</a>,
                    </div>
                    <div class="title_option">
                      <a href="/works">WORKS</a>,
                    </div>
                    <div class="title_option">
                      <a href="/about">ABOUT</a>,
                    </div>

                    <div class="title_option">
                    <a href="/contact">CONTACT</a>
                    </div>
                  </navbar>
                  <img
                    onClick={nextSlide}
                    class="slide_img"
                    src={slide.image}
                  ></img>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

{
}

{
  /* </div> */
}

{
}
