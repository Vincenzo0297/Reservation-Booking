import React, { useEffect } from 'react';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars  } from '@fortawesome/free-solid-svg-icons'; // Import the FontAwesome icons
import { handleNavToggle } from '../Main/Script'; // Ensure this path is correct
import 'boxicons/css/boxicons.min.css';
import pic1 from '../Image/Monkey.webp';
import pic2 from '../Image/Burger.webp';
import pic3 from '../Image/Pizza.jpg';
import pic4 from '../Image/Brunch&Cafe.webp';
import pic5 from '../Image/Korean.jpg';
import pic6 from '../Image/Japanese.avif';
import pic7 from '../Image/Mexican.jpg';
import pic8 from '../Image/Dessert.jpg';
import pic9 from '../Image/beer.avif';
import pic10 from '../Image/Meat.jpg';
import pic11 from '../Image/Pasta.webp';

function Main() {
    useEffect(() => {
        handleNavToggle(); // Call the function from script.js after component mounts
    }, []);

  return (
    <div>
        <header className="header" id="header">
          {/* ==== NAV ===*/}
          <nav className="nav container">
            <a href="/Main" className="nav-logo"> <h2>Reversation Booking</h2> </a>

            {/* ==== NAV MENU ===*/}
            <div className="nav-menu" id="nav-menu">
              {/* ==== NAV LIST ===*/}
              <ul className="nav-list">
                <li className="nav-item"><a href="#" className="nav-link">About me</a></li>
              </ul> 

                {/* ==== NAV CLOSE ===*/}
              <div className="nav-close" id="nav-close">
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>

            {/* ==== NAV BUTTON ===*/}
            <div className="nav-btn">
              {/* ==== TOGGLE BUTTON ===*/}
              <div className="nav-toggle" id="nav-toggle">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </nav>
        </header>

        <main className="about section" id="#">
            <div className="container">
                <div className="row">
                    <div className="about-content padd-15">
                        <div className="row">
                            <div className="about-text padd-15">    
                                <h2>Welcome!</h2>
                                <p>
                                    You can easily plan and reserve time with your significant other, ensuring those 
                                    special moments are never missed. Whether it’s a spontaneous date or a planned 
                                    surprise, our platform helps you prioritize your relationship in a fun and organized way. 
                                    Start reserving now and make every moment count!
                                </p>
                                <div className="icons">
                                    <a href="https://www.facebook.com/vincentong1997" target="_blank" rel="noopener noreferrer">
                                        <i className='bx bxl-facebook-square'></i>
                                    </a>
                                    <a href="https://www.instagram.com/iamvincentzo/" target="_blank" rel="noopener noreferrer">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                    <a href="https://www.instagram.com/iamvincentzo/" target="_blank" rel="noopener noreferrer">
                                        <i className='bx bxl-telegram'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-img padd-15">
                        <img src={pic1} alt="Pic1" />
                    </div>
                </div>
            </div>
        </main>

        <section class="project sections" id="projects">
            <div class="container">
                <h2 class="section-title padd-15">Food</h2>
                <div class="row">
                    <div class="project-filter padd-15">
                        <div class="project-filter-inner">
                            <button type="button" class="active" data-filter="all">All</button>
                            <button type="button" data-filter="Burger">Burger</button>
                            <button type="button" data-filter="Pizza">Pizza</button>
                            <button type="button" data-filter="Brunch&Cafe">Brunch & Cafe</button>
                            <button type="button" data-filter="Korean">Korean</button>
                            <button type="button" data-filter="Japanese">Japanese</button>
                            <button type="button" data-filter="others">others</button>
                        </div>
                    </div>
                </div>

                <div class="project-items row">
                    <div class="project-item padd-15" data-category="Burger">
                        <div class="project-item-inner">
                            <div class="project-item-thumbnail">
                                <a href="/Burger"><img src={pic2} alt="Pic2" /></a>
                            </div>
                                <span class="term">Burger</span>
                        </div>
                    </div>

                    <div class="project-item padd-15" data-category="Pizza">
                        <div class="project-item-inner">
                            <div class="project-item-thumbnail">
                                <a href="/Pizza"><img src={pic3} alt="Pic3" /></a>
                            </div>
                                <span class="term">Pizza</span>
                        </div>
                    </div>

                    <div class="project-item padd-15" data-category="Brunch&Cafe">
                        <div class="project-item-inner">
                            <div class="project-item-thumbnail">
                                <a href="/BrunchCafe"><img src={pic4} alt="Pic4" /></a>
                            </div>
                                <span class="term">Brunch & Cafe</span>
                        </div>
                    </div>

                    <div class="project-item padd-15" data-category="Korean">
                        <div class="project-item-inner">
                            <div class="project-item-thumbnail">
                                <a href="/Korean"><img src={pic5} alt="Pic5" /></a>
                            </div>
                                <span class="term">Korean</span>
                        </div>
                    </div>

                    <div class="project-item padd-15" data-category="Japanese">
                        <div class="project-item-inner">
                            <div class="project-item-thumbnail">
                                <a href="/Japanese"><img src={pic6} alt="Pic6" /></a>
                            </div>
                                <span class="term">Japanese</span>
                        </div>
                    </div>

                    <div class="project-item padd-15" data-category="Japanes">
                        <div class="project-item-inner">
                            <div class="project-item-thumbnail">
                                <a href="/Mexican"><img src={pic7} alt="Pic7" /></a>
                            </div>
                                <span class="term">Mexican</span>
                        </div>
                    </div>

                    <div class="project-item padd-15" data-category="others">
                        <div class="project-item-inner">
                            <div class="project-item-thumbnail">
                                <a href="/Dessert"><img src={pic8} alt="Pic8" /></a>
                            </div>
                                <span class="term">Dessert</span>
                        </div>
                    </div>

                    <div class="project-item padd-15" data-category="others">
                        <div class="project-item-inner">
                            <div class="project-item-thumbnail">
                                <a href="/Alcohol"><img src={pic9} alt="Pic9" /></a>
                            </div>
                                <span class="term">Alcohol</span>
                        </div>
                    </div>

                    <div class="project-item padd-15" data-category="others">
                        <div class="project-item-inner">
                            <div class="project-item-thumbnail">
                                <a href="/Meat"><img src={pic10} alt="Pic10" /></a>
                            </div>
                                <span class="term">Meat</span>
                        </div>
                    </div>

                    <div class="project-item padd-15" data-category="others">
                        <div class="project-item-inner">
                            <div class="project-item-thumbnail">
                                <a href="/Pasta"><img src={pic11} alt="Pic11" /></a>
                            </div>
                                <span class="term">Pasta</span>
                        </div>
                    </div>

                    <div class="project-item padd-15" data-category="others">
                        <div class="project-item-inner">
                            <div class="project-item-thumbnail">
                            <img src={pic1} alt="Pic1" />
                                <div class="mask"></div>
                            </div>
                                <span class="term">Others</span>
                                <h3 class="project-item-title">Coming Soon</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact section" id="contact">
            <div class="container">
                <h2 class="section-title padd-15">Contact Me</h2>
                <div class="row">
                    <div class="contact-box padd-15">
                        <div class="contact-data">
                       
                            <div class="contact-information">
                                <h3 class="contact-subtitle">Telegram</h3>
                                <span class="contact-description"><i class="lni lni-phone contact-icon"></i> @VincentWangs </span>
                            </div>

                            <div class="contact-information">
                                <h3 class="contact-subtitle">Email</h3>
                                <span class="contact-description"><i class="lni lni-user contact-icon"></i>Vincentong1997@gmail.com</span>
                            </div>

                        </div>
                    </div>

                    <form action="https://formspree.io/f/xyzgrabj" method="POST" className="contact-form">
                        <div className="contact-inputs">
                            <div className="contact-content">
                                <input type="text" name="Name" className="contact-input" id="name" required placeholder='Your Name'/>
                            </div>

                            <div className="contact-content contact-area">
                                <textarea name="Message" id="message" cols="30" rows="10" className="contact-input" required placeholder='Drop Your Message'></textarea>
                            </div>
                        </div>
                        <button type="submit" className="submit-btn">Send</button>
                        <button type="reset" className="back-button">Reset</button>
                    </form>
                </div>
            </div>
        </section>

        <footer>
            <h1>Connect with me</h1>
            <p class="description">
                Stay updated and never miss out on the latest reservations and romantic ideas! <br></br>
                Follow me on social media for tips, inspiration, and exclusive offers.
              </p>
            <p>© Copyright: Foolish Developer</p>
        </footer>
    </div>
  );
}

export default Main;
