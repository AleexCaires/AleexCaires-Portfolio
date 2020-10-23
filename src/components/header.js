import React from "react"
import HeaderStyle from "../styles/components/header.module.scss"

const Header = () => (
    <body>
	<nav className={HeaderStyle.mobileNav}>
		<li className={HeaderStyle.navItem}><a href="./#fw-home">Home</a></li>
        <li className={HeaderStyle.navItem}><a href="./#fw-about">About</a></li>
        <li className={HeaderStyle.navItem}><a href="./#fw-contact">Contact</a></li>
		</nav>

	<header>
		
		<div className={HeaderStyle.navToggle}>
            <div className={HeaderStyle.logo}>
                <a href="#0"><img src="../images/<TC"></a>
            </div>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>

		<nav className={[HeaderStyle.navigation , HeaderStyle.DesktopNav].join(' ')}> 
        <li className={HeaderStyle.navItem}><a href="./#fw-home">Home</a></li>
        <li className={HeaderStyle.navItem}><a href="./#fw-about">About</a></li>
        <li className={HeaderStyle.navItem}><a href="./#fw-contact">Contact</a></li>
		</nav>

	</header>
    </body>
)



export default Header