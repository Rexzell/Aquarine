//Navbar
const navSlide = () => {
	const burger = document.querySelector(".burger");
	const navbar = document.querySelector(".navbar");
	const navLinks = document.querySelectorAll(".navbar li");
	
	burger.addEventListener("click", () => {
		//Toggle Map
		navbar.classList.toggle("nav-active");
		
		//Animate Links
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = "";
			}
			else{
				link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		
		//Burger Animation
		burger.classList.toggle("toggle");
	});
}

navSlide();

