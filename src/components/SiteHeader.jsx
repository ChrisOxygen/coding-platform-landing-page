import { useState } from "react"
import MobileMenu from "./MobileMenu"
import MobileNavToggle from "./MobileNavToggle"

import { AnimatePresence } from "framer-motion"

function SiteHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    function handleMobileToggleClick(){
        setMobileMenuOpen((curr)=> !curr)
    }
    return (
        <header className="header">
              <img
                src=" /assets/logo.svg"
                alt="site logo"
                className="site-logo"
              />
              <menu className="nav-list">
                <li className="nav-list__item">Home</li>
                <li className="nav-list__item">About</li>
                <li className="nav-list__item">Blog</li>
              </menu>
              <button className="nav-cta-btn">Get Started Free</button>
                <MobileNavToggle mobileMenuOpen={mobileMenuOpen} handleMobileToggleClick={handleMobileToggleClick} />
                <AnimatePresence>
                {mobileMenuOpen &&  <MobileMenu/>}

                </AnimatePresence>
        </header>
    )
}

export default SiteHeader
