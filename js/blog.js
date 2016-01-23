function loadBlog(e){
	if(document.readyState !="complete")
	return ;
	var blog_article = document.getElementById("blog-post");

	blog_article.addEventListener("click",function(e){
                var element = document.getElementById("slider");
                
                element.parentNode.removeChild(element);
                var text=document.getElementById("blog-text");
                jQuery.get('/blog/test.txt', function(data) {
                    text.innerHTML = data;
                    //process text file line by line
                    text.html(data.replace('\n','\n'));
                    
}); 
				});
}
document.addEventListener("readystatechange",loadBlog);
