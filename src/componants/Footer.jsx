const Footer = () => {
  return (
    <footer className="bg-ink text-paper border-t-4 border-signature py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center lg:text-left">
            <h1 className="font-display font-black text-2xl">
              Vikas Bansode<span className="text-signature">.</span>
            </h1>
            <p className="font-mono text-muted mt-2 text-xs uppercase tracking-wide">
              Building websites &amp; applications
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 font-mono text-xs uppercase tracking-wide">
            {[
              { name: "Home", href: "#hero" },
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
                className="text-muted hover:text-signature transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <hr className="border-line mb-6" />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex gap-5 text-lg">
            {[
              { href: "https://github.com/Vikass19", icon: "fab fa-github" },
              { href: "https://www.instagram.com/vikass0129", icon: "fab fa-instagram" },
              { href: "https://www.youtube.com/@CodeDevApi", icon: "fab fa-youtube" },
            ].map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-signature transition-colors"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          <p className="font-mono text-muted text-xs text-center lg:text-right">
            © {new Date().getFullYear()} Vikas Bansode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
