function slider(el, next, i) {
	const container = document.querySelectorAll(".portfolio-item")[el];
	const img = container.children[0];
	const path = "img/portfolio/";
	
	
	const src = getImgArray(el);
	
	if (!next) {
		i--;
		if (i < 0)
			i = src.length - 1;
		console.log(i);	
		img.src = path + src[i];
	}
	
	else {
		i++;
		if (i == src.length)
			i = 0;
		img.src = path + src[i];
	}
	
	return i;
}

function getImgArray(el) {
	const allSrc = [
					[ // Path logos
						"Logo1 Amplitude.png",
						"Logo2 Burton snowboard.png",
						"Logo3 One+ 1.png",
						"Logo4 Infox.png",
						"Logo5 Parcours malin.png",
						"Logo6 Intelligence Crossmédia.png",
						"Logo7.Carte de visite S&G.png"
					],
					[ // Path illus
						"1.Live your dreams cit.png",
						"2.Illu.png",
						"3.Illu.png",
						"4.Illu.png",
						"5.Illu.png",
						"6.Illu.png",
						"7.Girl.png",
						"8.Simplicité.png",
						"9.Illu.png",
						"10.Illu.png",
						"11.Be creative.png",
						"12.Cover Louis Espérance.png",
						"13.Flyer Bonsaï.png"
					],
					[ // Path photo
						"Photo1.png",
						"Photo2.jpeg",
						"Photo3.jpg"
					],
				 ];

	return allSrc[el];
}

function addEvent() {
	const before = document.querySelectorAll(".portfolio-slider-nav .before");
	const next = document.querySelectorAll(".portfolio-slider-nav .next")
	const menuButton = document.querySelector(".burger-menu");
	const menu = document.querySelector(".nav-menu");
	
	let i = 0;
	
	for (let el = 0; el < before.length; el++) {
		before[el].addEventListener("click", () => {
			i = slider(el, false, i);
		});

		next[el].addEventListener("click", () => {
			i = slider(el, true, i);
		});
	}
	
	menuButton.addEventListener("click", () => {
		if (menu.classList.contains("show")) {
			menuButton.children[0].classList.add("fa-bars");
			menuButton.children[0].classList.remove("fa-times");
			menu.style.display = "none";
			menu.classList.add("hide");
			menu.classList.remove("show");
		}
		
		else {
			console.log("menuButton class- " + menuButton.children[0].classList);
			menuButton.children[0].classList.remove("fa-bars");
			menuButton.children[0].classList.add("fa-times");
			menu.style.display = "block";
			menu.classList.add("show");
			menu.classList.remove("hide");
		}
		
	});
	
}

	const dayNight = document.querySelector(".day-night");

	dayNight.addEventListener("click", () =>{
		dayNight.querySelector("i").classList.toggle("fa-sun");
		dayNight.querySelector("i").classList.toggle("fa-moon");
		document.body.classList.toggle("dark");
	})

window.addEventListener("load", () =>{
	if(document.body.classList.contains("dark")){
		dayNight.querySelector("i").classList.add("fa-sun");
	}
	else{
		dayNight.querySelector("i").classList.add("fa-moon");
	}
})

window.onload = addEvent();
// JavaScript Document