import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom'; 
import '../Main/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'; // Import the FontAwesome icons
import { handleNavToggle } from '../Main/Script'; // Ensure this path is correct

function Meat() {
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
                  <h2 className="form-title">Meat</h2>
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
                            <option value="burnt_ends">Burnt Ends</option>
                            <option value="meatsmith">Meatsmith</option>
                            <option value="the_feather_blade">The Feather Blade</option>
                            <option value="saveur">Saveur</option>
                            <option value="bedrock_bar_grill">Bedrock Bar & Grill</option>
                            <option value="armoury_craft_beer_steak">Armoury Craft Beer & Steak</option>
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

export default Meat;
