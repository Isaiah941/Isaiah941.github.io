window.addEventListener("DOMContentLoaded", () => {
	fetch("/includes/footer.html") // Removed leading slash
		.then(res => res.text())
		.then(html => {
			document.getElementById("footer").innerHTML = html;
		});
});