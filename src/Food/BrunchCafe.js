import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom'; 
import '../Main/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'; // Import the FontAwesome icons
import { handleNavToggle } from '../Main/Script'; // Ensure this path is correct

function BrunchCafe() {
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
                  <h2 className="form-title">Brunch & Cafe</h2>
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
                                <option value="brunches_cafe">Brunches cafe</option>
                                <option value="symmetry">Symmetry</option>
                                <option value="syip">SYIP</option>
                                <option value="coexist_coffee">Coexist Coffee</option>
                                <option value="jojis_diner">Joji's Diner</option>
                                <option value="tolidos_espresso_nook">Tolido's Espresso Nook</option>
                                <option value="the_poplus">The Poplus</option>
                                <option value="ps_cafe">P.S Cafe</option>
                                <option value="wildseed_cafe_bar">Wildseed Cafe & Bar at the SummerHouse</option>
                                <option value="comman_man_stan">Comman Man Stan</option>
                                <option value="park_bench_deli">Park Bench Deli</option>
                                <option value="breaded_bella">Breaded Bella</option>
                                <option value="lad_and_dad">Lad & Dad</option>
                                <option value="the_gardan_slug">The Gardan Slug</option>
                                <option value="oriole_coffee_bar">Oriole Coffee + Bar</option>
                                <option value="the_fabulous_baker_boy">The Fabulous Baker Boy</option>
                                <option value="wild_honey">Wild Honey</option>
                                <option value="dumpling_darling">Dumpling Darling</option>
                                <option value="kreams">Kreams</option>
                                <option value="suzuki_gourmet_coffee">Suzuki Gourmet Coffee</option>
                                <option value="cat_cafe">Cat Cafe</option>
                                <option value="pazzion_cafe">Pazzion cafe</option>
                                <option value="cafe_q_classified">Cafe Q classified</option>
                                <option value="you_are_my_sunshine_cafe">You are my sunshine Cafe</option>
                                <option value="tag_espresso">Tag Espresso</option>
                                <option value="orange_mocha_artisan_cafe">Orange Mocha Artisan Cafe and Bistro</option>
                                <option value="yahava_koffee_works">Yahava Koffee Works</option>
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

export default BrunchCafe;
