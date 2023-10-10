import React from "react";
import { Container } from "react-bootstrap";
import "./NewProductEffect.css";

const NewProductEffect = () => {
  return (
    <div className="contain">
      <Container>
        <div className="header">
          <h2 className="lines">FRESH OFF THE LINE</h2>
          <div className="paragraph">
            <p>
              Check out our latest releases to secure the most up-to-date
              upgrades for your setup{" "}
            </p>
          </div>
        </div>

        <div
          id="carouselExampleControls1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="cards-wrapper">
                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/CHcjPuA0VK_PPtwWDDrMe2cb728=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhdc%2Fhe3%2F9488743825438%2Fatlas-black-500x500.png"
                    alt="pad razer"
                    id="padmouse"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 className="product">Razer Atlas</h3>
                      <p className="summary">Tempered Glass Gaming</p>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$99.99</span>
                        </p>
                      </div>
                      <button className="buton-buy">NOTIFY ME</button>
                    </div>
                    <div id="genpnxgreen">NEW</div>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/w9p21V_LWgzTnzKSTQNfGvKbF_Y=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh57%2Fh84%2F9470716805150%2Fblade18-k9-v2-500x500.png"
                    alt="laptop razer blade 4090"
                    id="laptop4090"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 className="product">
                        Razer Blade 18 - QHD+ 240 Hz - GeForce RTX 4090 - Black
                      </h3>
                      <p className="summary">
                        NVIDIA® GeForce RTX™ 40 Series 18” Laptop with 13th Gen
                        Intel® Core™ i9 Processor (24-Core)
                      </p>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$4,499.99</span>
                        </p>
                      </div>
                      <button className="buton-buy">BUY</button>
                    </div>
                    <div className="genpnxyellow">GIFT WITH PURCHASE</div>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/7JCIOC8ZBOhZMS2Lw3vUeEgCCDs=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh0f%2Fh42%2F9485795786782%2Fuqcs-velocity-2-500x500.png"
                    alt="xboxrazeruniver"
                    id="xboxgreen"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 className="product">
                        Razer Universal Quick Charging Stand for Xbox - Velocity
                        Green
                      </h3>
                      <p className="summary">
                        Quick Charger for Xbox Controllers
                      </p>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$39.99</span>
                        </p>
                      </div>
                      <button className="buton-buy">BUY</button>
                    </div>
                    <div id="genpnxgreen">NEW</div>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/lPwZOaym8J5PS0_WOuvGXyOEeRE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8d%2Fh57%2F9480341520414%2Fevisu-tee-500x500.png"
                    alt="tshirtrazerevisu"
                    id="tshirtevisu"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 className="product">
                        Razer | EVISU Daicock Print T-Shirt - L
                      </h3>
                      <p className="summary"></p>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$129.00</span>
                        </p>
                      </div>
                      <button className="buton-buy">BUY</button>
                    </div>
                    <div id="genpnxgreen">NEW</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="cards-wrapper">
                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/lPwZOaym8J5PS0_WOuvGXyOEeRE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8d%2Fh57%2F9480341520414%2Fevisu-tee-500x500.png"
                    alt="panitsrazerevisu"
                    id="paintsevisu"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 className="product">
                        Razer | EVISU Daicock Print with Embroidery Carrot-Fit
                        Jeans #2017 - 38
                      </h3>
                      <p className="summary"></p>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$449.00</span>
                        </p>
                      </div>
                      <button className="buton-buy">BUY</button>
                    </div>
                    <div id="genpnxgreen">NEW</div>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/UMMOOXO9qmYHNHRP0h34f7gEGRg=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh4d%2Fh5b%2F9480341651486%2Fevisu-hoodie-500x500.png"
                    alt="hoodierazerevisu"
                    id="hoodieevisu"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 className="product">
                        Razer | EVISU Godhead Hoodie - L
                      </h3>
                      <p className="summary"></p>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$295.00</span>
                        </p>
                      </div>
                      <button className="buton-buy">BUY</button>
                    </div>
                    <div id="genpnxgreen">NEW</div>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/eHez3Jk5mkBmIwS6GK8ET50EbF8=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh4a%2Fhd6%2F9664129728542%2Fblade16-lamborghini-500x500.png"
                    alt="laptopgam"
                    id="razeblade16"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 className="product">
                        Razer Blade 16 x Automobili Lamborghini Edition
                      </h3>
                      <p className="summary">
                        16-inch Gaming Laptop with 13th Gen Intel® Core™ i9 HX
                        Processor
                      </p>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$295.00</span>
                        </p>
                      </div>
                      <button className="buton-buy">BUY</button>
                    </div>
                    <div id="genpnxgreen">NEW</div>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/OiLXZnyxxl3NtxiRmy2UrjGioHE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fheb%2Fh1f%2F9660298133534%2Ffujin-500x500.png"
                    alt="chairgam"
                    id="chairfujin"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 className="product">Razer Fujin</h3>
                      <p className="summary">Mesh Gaming Chair</p>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$295.00</span>
                        </p>
                      </div>
                      <button className="buton-buy">BUY</button>
                    </div>
                    <div id="genpnxgreen">NEW</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls1"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls1"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default NewProductEffect;
