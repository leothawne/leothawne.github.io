$(document).ready(function (){
	if(newsEnable != undefined && newsId != undefined && newsEnable == true){
		$.getJSON("/contents/json/news/" + newsId + ".json", function (responseData){
			var fixedNews = "";
			$.each(responseData, function (_, html_message, _, description, _, title, _, time, _, date, _, author_url, _, author_name, _, id){
				fixedNews =
					"Id: " + id + "<br /><br />" +
					"Author Name: " + author_name + "<br /><br />" +
					"Author URL: " + author_url + "<br /><br />" +
					"Date: " + date + "<br /><br />" +
					"Time: " + time + "<br /><br />" +
					"Title: " + title + "<br /><br />" +
					"Description: " + description + "<br /><br />" +
					"HTML Message: " + html_message + "<br /><br />";
			});
			$(".fixedNews").html(fixedNews);
		});
	} else {
		$(".fixedNews").html("News disabled by the administrator!");
	}
});
