/** @format */
"use strict";
//get the whole links and what to display

let btns = document.querySelectorAll(".port");
let gallerys = document.querySelectorAll(".same");

///gsap variable
let tl = new TimelineMax();
console.log(tl);

let remove = () => {
	gallerys.forEach((gallery) => {
		gallery.classList.remove("active");
	});
};

let added = (id) => {
	let show = document.getElementById(`${id}-gallery`);
	show.classList.add("active");
};

btns.forEach((btn) => {
	btn.onclick = (e) => {
		remove();

		//add active class to the clicked div
		added(e.target.id);
		///step 3
		// anime(e.target.id);
	};
});

/// adding gsap animation to the tabs

// let anime = (id) => {
// 	let show = document.getElementById(`${id}-gallery`);
// 	console.log(show);
// 	if (tl.isActive()) {
// 		tl.to(gallerys, 0.5, {
// 			y: 100,
// 			ease: Back.easeOut,
// 			onComplete: remove,
// 		}).fromTo(
// 			show,
// 			0.75,
// 			{ onStart: added, y: -100 },
// 			{ y: 0, ease: Elastic.easeOut, immediateRender: false }
// 		);
// 	}
// };
// zoom an image when clicked using gsap

// let zooms = document.querySelectorAll(".grid img");
// let grid = document.querySelector(".grid");
// let iszoomed = false;

// zooms.forEach((zoom) => {
// 	zoom.addEventListener("click", (e) => {
// 		//hide the other item using filter

// 		if (iszoomed) {
// 			const other = Array.from(zooms).filter((i) => i !== e.target);
// 			gsap.to(grid, {
// 				display: "grid",
// 				gridTemplateColumns: "repeat(3, 1fr)",
// 				gridTemplateRows: "repeat(5, 1fr)",
// 			});
// 			gsap.to(other, { display: "block" });
// 			gsap.to(e.target, {
// 				width: "90%",
// 				duration: 1,
// 				height: "-webkit-fill-available",
// 			});
// 			iszoomed = false;
// 		} else {
// 			const other = Array.from(zooms).filter((i) => i !== e.target);
// 			gsap.to(other, { display: "none" });
// 			gsap.to(grid, {
// 				display: "flex",
// 				justifyContent: "center",
// 			});
// 			gsap.to(e.target, {
// 				ease: "Elastic.easeOut",
// 				width: "",
// 				objectFit: "cover",
// 				duration: 1,
// 			});
// 			iszoomed = true;
// 		}
// 	});
// });
