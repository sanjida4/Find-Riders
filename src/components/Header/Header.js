import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';

const Header = () => {
    const [user, setUser] = useContext(userContext);
    return (
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand" style={{fontSize: '25px', fontWeight: '600'}}>Find Riders</Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0" style={{ justifyContent: 'flex-end', alignItems: 'center', 'width': '100%', fontSize: '18px'}}>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/ride/car" className="nav-link">Destination</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Blog</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Contact</Link>
                                </li>

                                <li className="nav-item">
                                    {
                                        user?.email ? <span className="nav-link">{user.name}</span> : <Link to="/login" className="nav-link"><button className="btn btn-warning">Login</button></Link>
                                    }

                                </li>

                            </ul>

                        </div>

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;