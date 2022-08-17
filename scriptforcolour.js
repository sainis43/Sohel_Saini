console.log('Its working')

//Changing theme colour + local save
let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if (mode == 'light'){
		document.getElementById('theme-style').href = "default.css"
	}
	if (mode == 'dark'){
		document.getElementById('theme-style').href = "dark.css"
	}
	if (mode == 'red'){
		document.getElementById('theme-style').href = "red.css"
	}
	if (mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}
	if (mode == 'green'){
		document.getElementById('theme-style').href = "green.css"
	}

	localStorage.setItem('theme', mode)

} 


// Mobile Menu -> Hamburger
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");
const subtitle = document.querySelector("#type1");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  subtitle.classList.toggle("hide")
});

// AOS
AOS.init();

// Typing Animation
new TypeIt("type1", {
  speed: 90,
  loop: true,
  waitUntilVisible: true,
})
  .type("a Computer Engineer.", { delay: 400 })
  .pause(1000)
  .delete()
  .type("a Web Developer.", { delay: 400 })
  .pause(1000)
  .delete()
  .type("an Athlete.", { delay: 400 })
  .pause(1000)
  .delete()
  .type("a Software Developer.", { delay: 400 })
  .pause(1000)
  .delete()
  .type("a Problem Solver.", { delay: 400 })
  .pause(1000)
  .delete()
  .type("an Analytical Thinker.", { delay: 400 })
  .pause(1000)
  .delete()
  .go();
