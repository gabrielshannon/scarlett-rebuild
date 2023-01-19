import React from 'react';

const about = () => {
  return (
    <div className="about">
      {/* <div className="top-section">
        <div className="bio_section">
          <div className="bio-paragraph">
            <p>
              British-Italian Scarlett Casciello embarked on her journey with
              photography from the age of 17 and went on to study fashion
              photography at Falmouth University at degree level. Following
              graduation she made the move to Beijing, quickly building British
              and Chinese editorial and commercial experience. Her multimarket
              commissions harnessed her love of colour, set design, diverse
              casting and deep cultural storytelling.
            </p>
            <p style={{ paddingTop: 12 }} className="">
              Scarlett's vision is very much led by her fascination with the
              beauty of both the female form and nature, with an ever-running
              desire to capture them within environments that are rich in colour
              and structure, giving her imagery at times a timeless and
              arresting illusionary and painterly feeling. Her inspiration
              continues to stem from the exploration of surrealism, nature, and
              classical art.
            </p>
          </div>

          <div class="icon-img-outer">
            <img
              class="icon-img"
              src="https://scarlettdata.online/wp-content/uploads/2022/10/1-2-scaled.jpg"
            ></img>
          </div>
        </div>

        <div className="client-section">
          <div>
            <h2>Services</h2>
            <p>
              Budget Management / Location Research and Scouting / Art Buying /
              Photo Studio, Light & Digital Equipment / Casting / Set Design &
              Props Research / Permits & Carnets / Retouching Services /
              Catering Services / Logistics & Transportations / Crew Selection &
              Coordination
            </p>
          </div>
          <div>
            <h2>Magazines</h2>
            <p>
              Re-Edition / Muse Magazine / Homme Girls / Puss Puss Magazine /
              Vogue Italia / Vogue Spain / Vogue Polska / D Repubblica / Family
              Portrait / Magazine Magazine / Fantastic Man / Sunday Times Style
              / Vogue Netherlands / CAP 74024 / Vogue Ukraine / Esquire Italia /
              Dapper Dan / Odda Magazine / Porter mag / GQ Germany
            </p>
          </div>
          <div>
            <h2>Clients</h2>
            <p>
              Moncler / Off White / Armani / Versace / Heron Preston / Miu Miu /
              &Other Stories / Opening Ceremony / Bally / Massimo Dutti /
              Coccinelle / Reformation / OVS / Bershka / Paris Texas / FURLA /
              Tik Tok / Aritzia / AREA / Desigual / Ports 1961 / Tod's /
              Selfridges
            </p>
          </div>
        </div>
      </div> */}
      <navbar class="navbar-about">
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

export default about;
