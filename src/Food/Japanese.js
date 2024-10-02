import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Main/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'; // Import the FontAwesome icons
import { handleNavToggle } from '../Main/Script'; // Ensure this path is correct

function Japanese() {
    const navigate = useNavigate();
    const [place, setPlace] = useState('');
    const [sushiOption, setSushiOption] = useState('');
    const [ramenOption, setRamenOption] = useState('');

    useEffect(() => {
        handleNavToggle(); // Call the function from script.js after component mounts
    }, []);

    const handleBackClick = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const handlePlaceChange = (e) => {
        const selectedPlace = e.target.value;
        setPlace(selectedPlace);
    };

    const handleSushiOptionChange = (e) => {
        setSushiOption(e.target.value);
    };

    const handleRamenOptionChange = (e) => {
        setRamenOption(e.target.value);
    };

    return (
        <div>
            <header className="header" id="header">
                {/* ==== NAV ===*/}
                <nav className="nav container">
                    <a href="/Main" className="nav-logo"><h2>Reservation Booking</h2></a>

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
                    <h2 className="form-title">Japanese</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="Name" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Reservation Date:</label>
                        <input type="date" name="Date" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time:</label>
                        <input type="time" name="Time" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="selection">Places:</label>
                        <select name="Places" className="form-input" required onChange={handlePlaceChange}>
                            <option value="">Select Your Place</option>
                            <option value="sushi">Sushi</option>
                            <option value="ramen">Ramen</option>
                        </select>
                    </div>

                    {/* Conditionally Render Dropdowns based on Place Selection */}
                    {place === 'sushi' && (
                        <div className="form-group">
                            <label htmlFor="sushi-options">Sushi Options:</label>
                            <select name="sushi-options" className="form-input" onChange={handleSushiOptionChange}>
                                <option value="">Select Your Sushi Type</option>
                                <option value="genki-sushi">Genki Sushi</option>
                                <option value="rappu-handroll">Rappu Handroll Bar</option>
                                <option value="standing-sushi">Standing Sushi Bar</option>
                            </select>
                        </div>
                    )}

                    {place === 'ramen' && (
                        <div className="form-group">
                            <label htmlFor="ramen-options">Ramen Options:</label>
                            <select name="ramen-options" className="form-input" onChange={handleRamenOptionChange}>
                                <option value="">Select Your Ramen Type</option>
                                <option value="keisuke">Keisuke Ramen at Tanjong Pagar</option>
                                <option value="sumire">Sumire Yakitori House</option>
                                <option value="yakiniku">Yakiniku GO</option>
                                <option value="tenya">Tenya</option>
                                <option value="nantsuttei">Nantsuttei</option>
                                <option value="man-man">Man Man Unagi Restaurant</option>
                            </select>
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="introduction">Special Request:</label>
                        <textarea name="introduction" className="form-input" rows="4" required placeholder='Anything you would like to go/where do you want to meet?'></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                    {/* Back Button */}
                    <button type="button" onClick={handleBackClick} className="back-button">Back</button>
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

export default Japanese;
