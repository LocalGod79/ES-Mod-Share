var theme = "light"

function loadModList() {
	for (var i = modList.length - 1; i >= 0; i--) {
		loadMod(modList[i], i);
	}
}

// Insert a mod, and use the number to determine which col it goes in
function loadMod(mod, number) {
	var col = "firstCol";
	var titleNoS = (mod.title).replace(/\s/g, '') + number;
	// if even number goes in first col
	if (number % 3 === 0) {
		col = "thirdCol";
	}else if (number % 2 === 0) {
		col = "firstCol";
	} else {
		col = "secondCol";
	}

	// Create the html
	var modHTML = '<div class="mod">' +
					'<div class="mod-preview" data-toggle="modal" data-target="#' + titleNoS + '">' +
					'<img class="preview-img" src="' + mod.image + '" alt="' + mod.title + '"' + 'onerror="this.onerror=null; this.src=\'img/web/github-mark.png\';"' + '>' +
					'<h4 class="preview-title">' + mod.title + '</h3>' +
					'</div>' +

					'<div class="modal fade" id="' + titleNoS + '" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">' +
					'<div class="modal-dialog modal-lg" role="document">' +
					'<div class="modal-content mod-content">' +
					'<img class="mod-img" src="' + mod.image + '" alt="' + mod.title + '"' + 'onerror="this.onerror=null; this.src=\'img/web/github-mark.png\';"' + '>' +
					'<h2 class="mod-title">' + mod.title + '</h2>' +
					'<h3 class="mod-author">By ' + mod.author + '</h3>' +
					'<p class="mod-description">' + mod.description + '</p>' +
					'<a class="btn btn-success mod-btn" href="' + mod.download + '" target="_blank">Download</a>' +
					'<br>' +
					'<a class="info-link" href="' + mod.infoLink + '" target="_blank">More Info</a>' +
					'<br>' +
					'<span class="tags">Tags: </span><span class="mod-tags">' + mod.tags + '</span>' +
					'</div></div></div></div>';

	// Append it to the list
	$('#' + col).append(modHTML);

}

$(document).ready(function(){
	loadModList();
	setTimeout(function() {
	var modCount = modList.length;
	$('#loadText').text("There is a total of " + modCount + " mods");
	$('.mod-preview').show();
	}, 1000);
});

function switchTheme() {
	$('.mod-preview').toggleClass("dark");
	$('.mod-content').toggleClass("dark");
	if (theme === "light") {
		//$('body').css('background-image', 'url("img/web/spacebg.jpg")');
		$('body').css('background-color', '#000');
		$('body').css('color', '#fff');
		theme = "dark";
	} else {
		$('body').css('background-image', '');
		$('body').css('background-color', '#fff');
		$('body').css('color', '#000');
		theme = "light";
	}
}