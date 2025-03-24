
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-coach-navy py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-coach-accent">404</h1>
          <p className="text-xl text-coach-light mb-8">Oops! Page not found</p>
          <Link to="/" className="cta-button-primary">
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
