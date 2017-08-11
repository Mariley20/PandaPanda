var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
for (var i = 0; i < pictures.length; i++) {
	var tag_img = document.createElement('img');
	
	tag_img.setAttribute('src', pictures[i]);
	tag_img.setAttribute('class', 'images')


	images.appendChild(tag_img)
}