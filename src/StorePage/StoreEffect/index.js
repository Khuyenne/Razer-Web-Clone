import React from "react";
import { Container } from "react-bootstrap";
import "./StoreEffectStyle.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const StoreEffect = () => {
  return (
    <div className="contain">
      <Container>
        <div className="lines">
          <h2 className="head">RAZER EXCLUSIVES</h2>
          <div className="paragraphs">
            <p>
              Explore unique products only available at our official online
              store{" "}
            </p>
            <a
              href="/exclusives"
              aria-label=""
              pnxssr_7=""
              data-gtm-promotion-viewed="true"
              className="newa"
            >
              View All
              <MdKeyboardArrowRight className="text-success" />
            </a>
          </div>
        </div>

        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="cards-wrapper">
                <div class="card">
                  <img
                    src="https://assets3.razerzone.com/0Ab864eqnrTXT7wnKgsRTZZCIvk=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png"
                    alt="Razer Blade 14 - Full HD 144Hz - GeForce RTX 3060 - Mercury"
                    id="laptopRazerB"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 id="product1">
                        Razer Blade 14 - Full HD 144Hz - GeForce RTX 3060 -
                        Mercury
                      </h3>
                      <p className="summary">
                        14-inch Gaming Laptop with AMD Ryzen™ 6900HX
                      </p>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$1,899.99</span>
                          <br />
                          <span className="savings">
                            <del>US$1,999.99</del>
                          </span>
                        </p>
                      </div>
                      <div className="butonbuy">Buy</div>
                    </div>

                    <div className="genpnxblue">5% off</div>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/dc2a8ydrlYbI1Cxql4dqvGcyOtA=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe8%2Fha6%2F9450109992990%2Funiversal-quick-charging-stand-xbox-v2-500x500.png"
                    alt="Razer Wireless Controller &amp; Quick Charging Stand for Xbox Razer Limited Edition"
                    id="xboxcontroll"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 id="product1">
                        Razer Wireless Controller & Quick Charging Stand for
                        Xbox Razer Limited Edition
                      </h3>
                      <p class="summary">
                        Officially Licensed Xbox Controller and Quick Charging
                        Stand
                      </p>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$199.99</span>
                        </p>
                      </div>
                      <div className="butonbuy">Buy</div>
                    </div>
                    <div class="genpnxorange">EXCLUSIVE</div>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/-KOFAqQm72zTlTzshkJLZ0Cru3U=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhde%2Fhf6%2F9422671118366%2Fdeathstalker-v2-pro-tenkeyless-500x500.png"
                    alt="Razer DeathStalker V2 Pro Tenkeyless - Clicky Optical Switch - US - Black"
                    id="keyboardrazer"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 id="product1">
                        Razer DeathStalker V2 Pro Tenkeyless - Clicky Optical
                        Switch - US - Black
                      </h3>
                      <p class="summary">
                        Wireless Low-Profile RGB Tenkeyless Optical Keyboard
                      </p>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$219.99</span>
                        </p>
                      </div>
                      <div className="butonbuy">Buy</div>
                    </div>

                    <div class="genpnxorange">EXCLUSIVE</div>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/Ieg_GHSv5HjDVCD2s-b6sNJAccE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6b%2Fh53%2F9420855967774%2Fbape-blackwidow-v3-500x500.png"
                    alt="Razer x *A Bathing Ape® BlackWidow V3 - Green Switch - US"
                    id="keyboardgamingX"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 id="product1">
                        Razer x *A Bathing Ape® BlackWidow V3 - Green Switch -
                        US
                      </h3>
                      <p class="summary">
                        Mechanical Gaming Keyboard with Razer Chroma RGB
                      </p>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$199.99</span>
                        </p>
                      </div>
                      <div className="butonbuy">Buy</div>
                    </div>

                    <div class="genpnxorange">EXCLUSIVE</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="cards-wrapper">
                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/R3uCcugMuuPu18L1LxiapmDCLAU=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh4e%2Fh74%2F9424953245726%2Fenki-pro-koenigsegg-500x500.png"
                    alt="Razer Enki Pro - Koenigsegg Edition"
                    id="gamingchair"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 id="product1">Razer Enki Pro - Koenigsegg Edition</h3>
                      <p class="summary">
                        Premium Gaming Chair with Alcantara® Leather for All-Day
                        Comfort
                      </p>
                      <div className="summary2">nothing</div>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$1,299.00</span>
                        </p>
                      </div>
                      <div className="butonbuy">Buy</div>
                    </div>
                    <div class="genpnxorange">GIFT WITH PURCHASE</div>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/12_4OfwAQ3B5jY_PQs1UmwQQL7k=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf7%2Fh73%2F9424953278494%2Fenki-pro-williams-esports-500x500.png"
                    alt="Razer Enki Pro - Williams Esports Edition"
                    id="gamingchair"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 id="product1">
                        Razer Enki Pro - Williams Esports Edition
                      </h3>
                      <p class="summary">
                        Premium Gaming Chair with Alcantara® Leather for All-Day
                        Comfort
                      </p>
                      <div className="summary2">nothing</div>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$1,299.00</span>
                        </p>
                      </div>
                      <div className="butonbuy">Buy</div>
                    </div>
                    <div class="genpnxorange">GIFT WITH PURCHASE</div>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/rLxmJ9RN9DddXdigmxvYghf55hk=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh68%2Fhbb%2F9443459858462%2Fathleisure-instinct-tee-500x500.png"
                    alt="Razer Athleisure - Instinct Tee - L"
                    id="tshirt"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 id="product1">Razer Athleisure - Instinct Tee - L</h3>
                      <p class="summary">
                        Versatile athleisure apparel for fitness and everyday
                        fashion
                      </p>
                      <div className="summary2">nothing</div>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$41.99</span>
                          <br />
                          <span className="savings">
                            <del>US$59.99</del>
                          </span>
                        </p>
                      </div>
                      <div className="butonbuy">Buy</div>
                    </div>
                    <div class="genpnxblue">30% off</div>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://assets3.razerzone.com/lYq_QgP7kuKDGOmBMt_GUh2ucQo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhab%2Fhb4%2F9443459661854%2Fathleisure-instinct-shorts-500x500.png"
                    alt="Razer Athleisure - Instinct Shorts - L"
                    id="pants"
                  />
                  <div className="card-body">
                    <div className="body-copy">
                      <h3 id="product1">
                        Razer Athleisure - Instinct Shorts - L
                      </h3>
                      <p class="summary">
                        Versatile athleisure apparel for fitness and everyday
                        fashion
                      </p>
                      <div className="summary2">nothing</div>
                    </div>
                    <div className="cta-contain">
                      <div className="price">
                        <p className="pricemoney">
                          <span>US$48.99</span>
                          <br />
                          <span className="savings">
                            <del>US$69.99</del>
                          </span>
                        </p>
                      </div>
                      <div className="butonbuy">Buy</div>
                    </div>
                    <div class="genpnxblue">30% off</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
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
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* <div role={"region"} aria-label="carousel" className="multi-panels">
          <span className="screeen-reader">This is carousel of products</span>
          <div className="cardnav">
            <button
              className="cardnav-arrow-previous"
              disabled
              aria-label="Previous"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="55"
                viewBox="0 0 30 55"
                pnxssr_12=""
              >
                <path
                  id="default"
                  d="M0,52.952,25.842,27.5,0,2.046,2.078,0,27.92,25.454h0L30,27.5,2.079,55Z"
                  transform="translate(30 55) rotate(180)"
                  fill="#eee"
                  pnxssr_13=""
                ></path>
              </svg>
            </button>
          </div>
          <ul className="manyboxs">
            <li className="loaded" id="panel-RZ0">
              <a
                href="https://www.razer.com/gaming-laptops/Razer-Blade-14/RZ09-0427EEM3-R3U1"
                aria-hidden="true"
                tabindex="-1"
                className="thumbnail-holder"
                pnxssr_16=""
                data-gtm-promotion-viewed="true"
              >
                <img
                  src="https://assets3.razerzone.com/0Ab864eqnrTXT7wnKgsRTZZCIvk=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png"
                  alt="Razer Blade 14 - Full HD 144Hz - GeForce RTX 3060 - Mercury"
                  id="laptopRazerB"
                />
              </a>


            <li id="panel-RZ87">
              <a
                href="https://www.razer.com/console-controllers/Controller-and-Charging-Stand/RZ87-04720400-B3U1"
                aria-hidden="true"
                tabindex="-1"
                class="thumbnail-holder"
              >
                <img
                  src="https://assets3.razerzone.com/dc2a8ydrlYbI1Cxql4dqvGcyOtA=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe8%2Fha6%2F9450109992990%2Funiversal-quick-charging-stand-xbox-v2-500x500.png"
                  alt="Razer Wireless Controller &amp; Quick Charging Stand for Xbox Razer Limited Edition"
                  id="xboxcontroll"
                />
              </a>
              <div className="contain-cotent">
              
            </li>

            <li id="panel-RZ03">
              <a
                href="https://www.razer.com/gaming-keyboards/Razer-DeathStalker-V2-Pro-Tenkeyless/RZ03-04371800-R3M1"
                aria-hidden="true"
                tabindex="-1"
                class="thumbnail-holder"
              >
                <img
                  src="https://assets3.razerzone.com/-KOFAqQm72zTlTzshkJLZ0Cru3U=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhde%2Fhf6%2F9422671118366%2Fdeathstalker-v2-pro-tenkeyless-500x500.png"
                  alt="Razer DeathStalker V2 Pro Tenkeyless - Clicky Optical Switch - US - Black"
                  id="keyboardrazer"
                />
              </a>
              <div className="contain-cotent">
                
            </li>

            <li id="panel-RZ04">
              <a
                href="https://www.razer.com/gaming-keyboards/Razer-BlackWidow-V3/RZ03-03543000-R3M1"
                aria-hidden="true"
                tabindex="-1"
                class="thumbnail-holder"
              >
                <img
                  src="https://assets3.razerzone.com/Ieg_GHSv5HjDVCD2s-b6sNJAccE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6b%2Fh53%2F9420855967774%2Fbape-blackwidow-v3-500x500.png"
                  alt="Razer x *A Bathing Ape® BlackWidow V3 - Green Switch - US"
                  id="keyboardgamingX"
                />
              </a>
              <div className="contain-cotent">
                
            </li>

            <li id="panel-RZ38">
              <a
                href="https://www.razer.com/gaming-chairs/Razer-Enki/RZ38-03710200-R3U1"
                aria-hidden="true"
                class="thumbnail-holder"
              >
                <img
                  src="https://assets3.razerzone.com/R3uCcugMuuPu18L1LxiapmDCLAU=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh4e%2Fh74%2F9424953245726%2Fenki-pro-koenigsegg-500x500.png"
                  alt="Razer Enki Pro - Koenigsegg Edition"
                  id="gamingchair"
                />
              </a>
              <div className="contain-cotent">
                
            </li>

            <li id="panel-RZ38">
              <a
                href="https://www.razer.com/gaming-chairs/Razer-Enki/RZ38-03710300-R3U1"
                aria-hidden="true"
                class="thumbnail-holder"
              >
                <img
                  src="https://assets3.razerzone.com/12_4OfwAQ3B5jY_PQs1UmwQQL7k=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf7%2Fh73%2F9424953278494%2Fenki-pro-williams-esports-500x500.png"
                  alt="Razer Enki Pro - Williams Esports Edition"
                  id="gamingchair"
                />
              </a>
              <div className="contain-cotent">
                
            </li>

            <li id="panel-RC01">
              <a
                href="https://www.razer.com/apparel-shirts/Razer-Athleisure-Instinct-Tee/RC01-01180119-05LG"
                aria-hidden="true"
                class="thumbnail-holder"
              >
                <img
                  src="https://assets3.razerzone.com/rLxmJ9RN9DddXdigmxvYghf55hk=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh68%2Fhbb%2F9443459858462%2Fathleisure-instinct-tee-500x500.png"
                  alt="Razer Athleisure - Instinct Tee - L"
                  id="tshirt"
                />
              </a>
              <div className="contain-cotent">
                
            </li>

            <li id="panel-RC01">
              <a
                href="https://www.razer.com/apparel-bottoms/Razer-Athleisure-Instinct-Shorts/RC01-01190119-05LG"
                class="thumbnail-holder"
                aria-hidden="true"
              >
                <img
                  src="https://assets3.razerzone.com/lYq_QgP7kuKDGOmBMt_GUh2ucQo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhab%2Fhb4%2F9443459661854%2Fathleisure-instinct-shorts-500x500.png"
                  alt="Razer Athleisure - Instinct Shorts - L"
                  id="pants"
                />
              </a>
              <div className="contain-cotent">
                
            </li>

            <li data-order="8" class="spacer" pnxssr_87=""></li>
          </ul>

          <div class="cardnav1" pnxssr_88="">
            <button class="cardnav-arrow-next" aria-label="Next" pnxssr_89="">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="55"
                viewBox="0 0 30 55"
                pnxssr_90=""
                id="svbtn"
              >
                <path
                  id="default"
                  d="M0,52.952,25.842,27.5,0,2.046,2.078,0,27.92,25.454h0L30,27.5,2.079,55Z"
                  fill="#eee"
                  pnxssr_91=""
                ></path>
              </svg>
            </button>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default StoreEffect;
