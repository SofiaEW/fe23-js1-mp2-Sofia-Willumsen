let mittVal = ["sten", "sax", "påse"];
let h4Text = " ";

let minVinst = 0;
let datornsVinst = 0;

const myForm = document.querySelector("form");
const myDiv = document.querySelector("div");

myForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const message = document.querySelector("#mittNamn").value;
	document.querySelector("h3").innerText = message;
});
myDiv.addEventListener("click", (event) => {
	let datornsVal = Math.floor(Math.random() * 3);

	if (event.target.id === "sten") {
		h4Text = document.querySelector("#sten").textContent;
	} else if (event.target.id === "sax") {
		h4Text = document.querySelector("#sax").textContent;
	} else if (event.target.id === "påse") {
		h4Text = document.querySelector("#påse").textContent;
	}

	if (datornsVal == 0) {
		datornsVal = "sten";
	}
	if (datornsVal == 1) {
		datornsVal = "sax";
	}
	if (datornsVal == 2) {
		datornsVal = "påse";
	}

	const vinster = document.querySelector("p");
	if (event.target.tagName === "BUTTON") {
		if (datornsVal === "påse" && event.target.id === "sax") {
			++minVinst;
		}
		if (datornsVal === "påse" && event.target.id === "sten") {
			++datornsVinst;
		}

		if (datornsVal === "sax" && event.target.id === "påse") {
			++datornsVinst;
		}

		if (datornsVal === "sax" && event.target.id === "sten") {
			++minVinst;
		}

		if (datornsVal === "sten" && event.target.id === "sax") {
			++datornsVinst;
		}
		if (datornsVal === "sten" && event.target.id === "påse") {
			++minVinst;
		}
		if (datornsVinst == 3 || minVinst == 3) {
			document.querySelector("#omstart").style.display = "block";
			document.querySelector("#sten").style.display = "none";
			document.querySelector("#sax").style.display = "none";
			document.querySelector("#påse").style.display = "none";
			document.querySelector("#vinnaren").style.display = "block";
		}
		if (datornsVinst == 3) {
			document.querySelector("#vinnaren").innerText = "Tyvärr du förlorade";
		}
		if (minVinst == 3) {
			document.querySelector("#vinnaren").innerText = "Grattis du vann!";
		}

		if (event.target.id == "omstart") {
			minVinst = 0;
			datornsVinst = 0;
			document.querySelector("#sten").style.display = "inline-block";
			document.querySelector("#sax").style.display = "inline-block";
			document.querySelector("#påse").style.display = "inline-block";
			document.querySelector("#vinnaren").style.display = "none";
		}
	}

	vinster.innerText =
		"Mina vinster: " + minVinst + " " + "Datorns vinster:  " + datornsVinst;
	document.querySelector("h5").style.display = "block";

	document.querySelector("h4").innerText = "Jag valde: " + h4Text;
	document.querySelector("h5").innerText = "Datorn valde: " + datornsVal;
});
