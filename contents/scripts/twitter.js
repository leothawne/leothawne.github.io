$(document).ready(function (){
	if(tweetEnabled == true){
		$.getJSON("https://publish.twitter.com/oembed?url=" + tweetURL, function (responseData){
			var fixedTweet = "";
			$.each(responseData, function (url, author_name, author_url, html, width, height, type, cache_age, provider_name, provider_url, version){
				fixedTweet = "URL: " + url + "<br /><br />" +
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
			});
			$(".fixedTweet").html(fixedTweet);
		});
	} else {
		$(".fixedTweet").html("Twitter API disabled by the administrator!");
	}
});
