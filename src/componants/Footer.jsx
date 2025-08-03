const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-black to-gray-800 backdrop-blur-md rounded-xl text-white py-10 px-6 shadow-inner">
      <div className="container mx-auto max-w-7xl">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h1 className="text-yellow-400 text-3xl font-bold">Vikas Bansode</h1>
            <p className="text-gray-400 mt-2 text-sm">
              Creating innovative websites & applications.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            {[
              { name: "Home", href: "#main-content" },
              { name: "Portfolio", href: "#portfolio" },
              { name: "Contact", href: "#contact" },
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/vikas-bansode-324467229",
                external: true,
              },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                className="text-gray-400 hover:text-yellow-400 text-sm transition duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-5 text-lg">
            {[
              {
                href: "https://github.com/Vikass19",
                icon: "fab fa-github",
              },
              {
                href: "https://www.instagram.com/vikass0129",
                icon: "fab fa-instagram",
              },
              {
                href: "https://www.youtube.com/@CodeDevApi",
                icon: "fab fa-youtube",
              },
            ].map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transform hover:scale-110 transition duration-300"
              >
                <i className={`${social.icon}`}></i>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center lg:text-right">
            &copy; {new Date().getFullYear()} Vikas Bansode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
