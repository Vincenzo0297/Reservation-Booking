import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom'; 
import '../Main/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'; // Import the FontAwesome icons
import { handleNavToggle } from '../Main/Script'; // Ensure this path is correct

function Burger() {
    const navigate = useNavigate();

    useEffect(() => {
        handleNavToggle(); // Call the function from script.js after component mounts
    }, []);

    const handleBackClick = () => {
      navigate(-1); // Navigate back to the previous page
  };

    return (
        <div>
            <header className="header" id="header">
                {/* ==== NAV ===*/}
                <nav className="nav container">
                    <a href="/Main" className="nav-logo"><h2>Reversation Booking</h2></a>

                    {/* ==== NAV MENU ===*/}
                    <div className="nav-menu" id="nav-menu">
                        {/* ==== NAV LIST ===*/}
                        <ul className="nav-list">
                            <li className="nav-item"><a href="#" className="nav-link">About me</a></li>
                            <li className="nav-item"><a href="/Main" className="nav-link">Home</a></li>
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

            <main>
                <form action='https://formspree.io/f/xeojywpl' method="POST" className="reservation-form">
                  <h2 className="form-title">Buger</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="Name" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Reversation Date:</label>
                        <input type="date" name="Date" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input type="time" name="Time" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="selection">Places:</label>
                        <select name="Place" className="form-input" required>
                            <option value="">Select Your Place</option>
                            <option value="burger_bar_new_york">Burger Bar New York</option>
                            <option value="potato_head">Potato Head</option>
                            <option value="two_blur_guys">Two Blur Guys</option>
                            <option value="ashes_burnit">Ashes Burnit</option>
                            <option value="wildfire_burger">Wildfire Burger</option>
                            <option value="25_degree_burger">25 Degree Burger</option>
                            <option value="omakase_burger">Omakase Burger</option>
                            <option value="meatsmith">Meatsmith</option>
                            <option value="hans_im_gluck">Hans Im Gluck</option>
                            <option value="five_guys">Five Guys</option>
                            <option value="shake_shack">Shake Shack</option>
                            <option value="carne">Carne</option>
                            <option value="8ash">8Ash</option>
                            <option value="skirt_and_dirt">Skirt and Dirt</option>
                            <option value="burger_bar">Burger Bar</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="introduction">Special Request:</label>
                        <textarea name="Special Request" className="form-input" rows="4" required placeholder='Anything you would like to go/where do you want to meet? '></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                      {/* Back Button */}
                    <button onClick={handleBackClick} className="back-button">Back</button>
                </form>
            </main>

            <footer>
                <h1>Connect with me</h1>
                <p className="description">
                    Stay updated and never miss out on the latest reservations and romantic ideas! <br />
                    Follow me on social media for tips, inspiration, and exclusive offers.
                </p>
                <p>© Copyright: Foolish Developer</p>
            </footer>
        </div>
    );
}

export default Burger;
