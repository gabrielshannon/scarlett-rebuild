import React from 'react';

const contact = () => {
  return (
    <div className="gallery_section">
      <div className="top-section">
        <div className="bio_section">
          <div className="bio-paragraph">
            <h1 style={{ marginBottom: 20 }}>INSTAGRAM @SQUALOPRODUZIONI</h1>
            <h1 style={{ marginBottom: 20 }}>
              EMAIL INFO@SQUALOPRODUZIONI.COM
            </h1>
            <h1 style={{ marginBottom: 20 }}>+39 349 68 58 748</h1>
            <h1 style={{ marginBottom: 20 }}>WEB DESIGN GIULIA NARDI </h1>
            <h1 style={{ marginBottom: 20 }}>
              {' '}
              WEB DEVELOPMENT GIULIO LIBERATI
            </h1>
            <h1>LOGO DESIGN FABIO DEMITRI</h1>
          </div>
        </div>
      </div>

      <navbar class="navbar_info">
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
    </div>
  );
};

export default contact;

// return (
//     <section className="about">
//   <div className="top-section">
//     <div className="bio_section">
//       <div className="bio-paragraph">
//         <h1 style={{marginBottom:20}}>INSTAGRAM @SQUALOPRODUZIONI</h1>
//         <h1 style={{marginBottom:20}}>EMAIL INFO@SQUALOPRODUZIONI.COM</h1>
//         <h1 style={{marginBottom:20}}>+39 349 68 58 748</h1>
//         <h1 style={{marginBottom:20}}>WEB DESIGN GIULIA NARDI </h1>
//         <h1 style={{marginBottom:20}}> WEB DEVELOPMENT GIULIO LIBERATI</h1>
//         <h1>LOGO DESIGN FABIO DEMITRI</h1>

//       </div>
//     </div>

//       </div>
//       <navbar class="navbar-about">
//         <div class="title_option">
//           <a href="/">HOME</a>,
//         </div>
//         <div class="title_option">
//           <a href="/works">WORKS</a>,
//         </div>
//         <div class="title_option">
//           <a href="/about">ABOUT</a>,
//         </div>

//         <div class="title_option">
//           <a href="">CONTACT</a>
//         </div>
//       </navbar>
//     </section>
//   );
