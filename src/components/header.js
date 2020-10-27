import React from "react"
import HeaderStyle from "../styles/components/header.module.scss"
import logo from "../images/TC.svg"

class Header extends React.Component {

	componentDidMount() {
		const hamburger = document.getElementsByClassName(HeaderStyle.navToggle);
		const mobileNav = document.getElementsByClassName(HeaderStyle.mobileNav);

		if ( hamburger[0] && mobileNav[0] ) {
			hamburger[0].addEventListener("click", function(e) {
				e.preventDefault();
				if (this.classList.contains(HeaderStyle.open)) {
					this.classList.remove(HeaderStyle.open);
					mobileNav[0].classList.remove(HeaderStyle.open);
				} else {
					this.classList.add(HeaderStyle.open);
					mobileNav[0].classList.add(HeaderStyle.open);
				}
			});
		}

	}

	render() {
		return(
			<header>
				<nav className={HeaderStyle.mobileNav}>
					<li className={HeaderStyle.navItem}><a href="./#fw-home">Home</a></li>
					<li className={HeaderStyle.navItem}><a href="./#fw-about">About</a></li>
					<li className={HeaderStyle.navItem}><a href="./#fw-contact">Contact</a></li>
				</nav>

				<div className={HeaderStyle.Logo}>
					<img src={logo} alt="logo" />
				</div>

				<div className={HeaderStyle.navToggle}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<nav className={HeaderStyle.navigation}> 
					<li className={HeaderStyle.navItem}><a href="./#fw-home">Home</a></li>
					<li className={HeaderStyle.navItem}><a href="./#fw-about">About</a></li>
					<li className={HeaderStyle.navItem}><a href="./#fw-contact">Contact</a></li>
				</nav>
			</header>
		)
	}
}

export default Header
