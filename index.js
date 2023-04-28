/** @format */
"use strict";
//get the whole links and what to display

///gsap variable
let tl = new TimelineMax();
console.log(tl);
let mage = document.querySelectorAll(".mage");

let btns = document.querySelectorAll(".port");
let gallerys = document.querySelectorAll(".same");

let remove = () => {
	gallerys.forEach((gallery) => {
		gallery.classList.remove("active");
	});
};
let poped = () => {
	btns.forEach((btn) => {
		btn.classList.remove("pop");
	});
};

let added = (id, i) => {
	let show = document.getElementById(`${id}-gallery`);
	show.classList.add("active");

	gsap.to(mage, { opacity: 1, duration: 2, stagger: 0.5 });
	gsap.to(mage[id], { opacity: 1, duration: 2, stagger: 0.5 });
};

btns.forEach((btn) => {
	btn.onclick = (e, i) => {
		poped();
		remove();
		console.log(i);
		//add active class to the clicked div
		added(e.target.id);
		e.target.classList.add("pop");
	};
});

gsap.to(mage, { opacity: 1, duration: 2, stagger: 0.5 });

// mobile view in javascript

const mobile = document.querySelector("#mobile");
let champ = document.querySelector("#when");

mobile.addEventListener("click", () => {
	champ.classList.toggle("bump");
	mobile.classList.toggle("open");
	if (mobile.classList.contains("open")) {
		gsap.to(champ, { opacity: 1, duration: 2 });
	} else {
		gsap.to(champ, { opacity: 0, duration: 2 });
	}
});
