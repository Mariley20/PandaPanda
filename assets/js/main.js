var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
for (var i = 0; i < pictures.length; i++) {
    var tag_div = document.createElement('div');
	var tag_img = document.createElement('img');
    var tag_button = document.createElement('button')
    tag_button.setAttribute('class', 'btnX')
    tag_button.appendChild(document.createTextNode('x'))
	
	tag_img.setAttribute('src', pictures[i]);
	tag_div.setAttribute('class', 'div_images')
    tag_div.appendChild(tag_img)
    tag_div.appendChild(tag_button);

	images.appendChild(tag_div)
}