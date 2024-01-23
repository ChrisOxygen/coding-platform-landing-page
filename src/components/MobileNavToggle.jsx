/* eslint-disable react/prop-types */
function MobileNavToggle({mobileMenuOpen, handleMobileToggleClick}) {
    return (
        <div className="mobile-nav-toggle">
                    <input id="checkbox" type="checkbox" checked={mobileMenuOpen} onChange={()=> handleMobileToggleClick()} />
                    <label className="toggle" htmlFor="checkbox">
                        <div id="bar1" className="bars" />
                        <div id="bar2" className="bars" />
                        <div id="bar3" className="bars" />
                    </label>
                    
                </div>
    )
}

export default MobileNavToggle
