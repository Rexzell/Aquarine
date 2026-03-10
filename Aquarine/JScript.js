const navSlide = () => {
	const burger = document.querySelector(".burger");
	const navbar = document.querySelector(".navbar");
	const navLinks = document.querySelectorAll(".navbar li");
	
	burger.addEventListener("click", () => {
		navbar.classList.toggle("nav-active");
		
		// Animate Links
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = "";
			}
			else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		
		burger.classList.toggle("toggle");
	});
}

navSlide();

window.addEventListener("load", function(){
	const loader = document.querySelector(".loader-wrapper");
	loader.style.display = "none";
});