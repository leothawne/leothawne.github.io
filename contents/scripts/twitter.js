$(document).ready(function (){
	if(newsEnabled == true){
		$.getJSON("/contents/json/news.json", function (responseData){
			var	fixedNews = "URL: " + url + "<br /><br />" +
				"Author Name: " + author_name + "<br /><br />" +
				"Author URL: " + author_url + "<br /><br />" +
				"HTML: " + html + "<br /><br />" +
				"Width: " + width + "<br /><br />" +
				"Height: " + height + "<br /><br />" +
				"Type: " + type + "<br /><br />" +
				"Cache Age: " + cache_age + "<br /><br />" +
				"Provider Name: " + provider_name + "<br /><br />" +
				"Provider URL: " + provider_url + "<br /><br />" +
				"Version: " + version;
			$(".fixedNews").html(fixedNews);
		});
	} else {
		$(".fixedNews").html("News disabled by the administrator!");
	}
});
