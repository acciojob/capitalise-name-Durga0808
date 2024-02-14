const fname = document.getElementById("fname");
fname.addEventListener("blur", () => {
	fname.value = fname.value.toUpperCase();
})