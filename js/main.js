const createOverlay = () => {
	const overlay = document.createElement('div')
	overlay.classList.add('inactive')
	overlay.onclick = function() {
		this.classList.toggle('inactive')
		this.classList.toggle('active')
	}
	return overlay
}

const createOverlays = tagName => {
	Array.prototype.forEach.call(document.getElementsByTagName(tagName), golden => golden.append(createOverlay()))
}

window.onload = () => {
	createOverlays('golden')
	createOverlays('moon')
}
