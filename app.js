let main = document.querySelector(".main");
let box1next = document.querySelector(".box1-next");
let loader = document.querySelector(".loader");
let mainbox = document.querySelector(".main-box")

box1next.addEventListener("click", function () {
	box1next.style.display = "none";
	loader.style.display = "block"

	setTimeout(() => {
		main.remove();
		mainbox.style.display = "grid";
	}, 3000);

	console.log("next is clicked");
})

// for-box4
let btn = document.querySelector(".addtsk");
let inp1 = document.querySelector("#input1");
let inp2 = document.querySelector("#input2");
let inp3 = document.querySelector("#input3");

let table = document.querySelector("table");

btn.addEventListener("click", function () {
	if (inp2.value == "") {
		alert("please enter a task , then click");
	}
	else {
		let row = document.createElement("tr");
		row.className = "table-row";
		table.appendChild(row);
		let item1 = document.createElement("td");
		let item2 = document.createElement("td")
		let item3 = document.createElement("td")
		let delbtn = document.createElement("td");
		item1.innerText = inp1.value;
		item2.innerText = inp2.value;
		item3.innerText = inp3.value;
		delbtn.className = "delete";
		let icon = document.createElement("i");
		icon.className = "fa-solid fa-trash"
		row.appendChild(delbtn);
		row.appendChild(item1);
		row.appendChild(item2);
		row.appendChild(item3);
		delbtn.appendChild(icon);
		inp1.value = "";
		inp2.value = "";
		inp3.value = "";
	}
    
})


table.addEventListener("click", function (event) {
	console.log(event.target.nodeName);
	if (event.target.nodeName == "I") {
		let td= event.target.parentElement;
		let td_pr = td.parentElement;
		td_pr.remove();
	}
})

