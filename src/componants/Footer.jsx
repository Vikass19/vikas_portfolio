const Footer = () => {
  return (
    <footer className="bg-black rounded-lg text-gold py-8">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h1 className="text-yellow text-2xl font-bold">Vikas Bansode</h1>
            <p className="text-graytext mt-2">
              Creating innovative websites & applications.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#main-content"
              className="text-graytext hover:text-yellow transition"
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="text-graytext hover:text-yellow transition"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-graytext hover:text-yellow transition"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-bansode-324467229"
              className="text-graytext hover:text-yellow transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-graytext" />

        {/* Social Media & Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-6 lg:mb-0">
            <a
              href="https://github.com/Vikass19"
              className="text-graytext hover:text-yellow transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/vikass0129"
              className="text-graytext hover:text-yellow transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://www.youtube.com/@CodeDevApi"
              className="text-graytext hover:text-yellow transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-graytext text-center lg:text-right text-sm">
            &copy; {new Date().getFullYear()} Vikas Bansode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
