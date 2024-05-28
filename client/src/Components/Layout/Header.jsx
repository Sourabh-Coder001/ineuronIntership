import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/Cart";
import { FaShopify } from "react-icons/fa";
import { Badge } from "antd";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const twitterLink = 'https://twitter.com/example';
const instagramLink = 'https://instagram.com/__sourabh_skater__09?igshid=NzZlODBkYWE4Ng==';
const facebookLink = 'https://www.facebook.com/sourabh.lakade.3?mibextid=ZbWKwL';
const whatsappLink = 'https://wa.me/9370171615';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <div className="header-top">
        <div className="header-contact">
          <PhonelinkRingIcon /> Toll Free: 808080 555
        </div>
        <h1 className="kisan-title">
          <span className="shopfy-title">Shopfy</span>
        </h1>
        <div className="header-socials">
          <a href={twitterLink}><TwitterIcon /></a>
          <a href={instagramLink}><InstagramIcon /></a>
          <a href={facebookLink}><FacebookIcon /></a>
          <a href={whatsappLink}><WhatsAppIcon /></a>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              <FaShopify /> Shopfy
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c.slug}>
                      <Link className="dropdown-item" to={`/category/${c.slug}`}>
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth?.user?.name}
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                        className="dropdown-item"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={handleLogout}
                        to="/login"
                        className="dropdown-item"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}
              <li className="nav-item">
                <Badge count={cart?.length} showZero>
                  <NavLink to="/cart" className="nav-link">
                    <ShoppingCartIcon /> Cart
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px;
          background-color: white;
        }
        .header-contact {
          display: flex;
          align-items: center;
        }
        .kisan-title {
          margin: 0;
          text-align: center;
        }
        .shopfy-title {
          color: orange;
          font-family: Georgia, serif;
          font-weight: 700;
        }
        .header-socials {
          display: flex;
          align-items: center;
        }
        .header-socials a {
          margin-left: 10px;
        }
        @media (max-width: 768px) {
          .kisan-title {
            font-size: 1.5rem;
            margin-left: 20px;
          }
          .header-contact {
            font-size: 0.9rem;
          }
        }
        @media (max-width: 576px) {
          .header-contact {
            font-size: 0.8rem;
          }
          .header-socials a {
            margin-left: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
