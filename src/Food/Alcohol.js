import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom'; 
import '../Main/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'; // Import the FontAwesome icons
import { handleNavToggle } from '../Main/Script'; // Ensure this path is correct

function Alcohol() {
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
                  <h2 className="form-title">Alcohol</h2>
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
                            <option value="goodluck_beerhouse">Goodluck BeerHouse</option>
                            <option value="almost_famous">Almost Famous</option>
                            <option value="heart_of_darkness">Heart of Darkness</option>
                            <option value="orh_gao_tap_room">Orh Gao Tap Room</option>
                            <option value="trippling_club">Trippling Club</option>
                            <option value="whiskey_library">Whiskey Library</option>
                            <option value="atlas">Atlas</option>
                            <option value="holey_moley">Holey Moley</option>
                            <option value="no_5_emerald_hill">No. 5 Emerald Hill</option>
                            <option value="bar_stories">Bar stories</option>
                            <option value="platform">Platform</option>
                            <option value="loof">Loof</option>
                            <option value="level_33">Level 33</option>
                            <option value="the_spiffy_dapper">The Spiffy Dapper</option>
                            <option value="the_guild">The Guild</option>
                            <option value="joo_bar">Joo Bar</option>
                            <option value="the_chamber">The Chamber</option>
                            <option value="chijmes">Chijmes</option>
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

export default Alcohol;
