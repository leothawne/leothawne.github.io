$(document).ready(function (){
	if(tweetEnabled == true){
		$.getJSON("https://publish.twitter.com/oembed?url=" + tweetURL, function (responseData){
			var items = [];
			$.each(responseData, function (url, author_name, author_url, html, width, height, type, cache_age, provider_name, provider_url, version){
				items.push("");
				//continuar
			});
		});
	} else {
		$(".fixedTweet").html("Twitter API disabled by the administrator!");
	}
});