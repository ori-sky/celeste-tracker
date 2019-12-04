window.onload = function() {
	var tags = document.getElementsByTagName('div')
	for(var i = 0; i < tags.length; ++i) {
		var tag = tags[i]
		if(tag.classList.contains('active') || tag.classList.contains('inactive')) {
			tag.onclick = function() {
				this.classList.toggle('inactive')
				this.classList.toggle('active')
			}
		}
	}
}
