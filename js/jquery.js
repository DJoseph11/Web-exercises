

// $(document).ready(function() {
// 	alert("the system is ready");
//
// 	$(".item-container, li").css("font-size", "20px");
//
// 	$("h1, p, li").css("background-color", "yellow");
//
// 	var content = $("#title").text()
//
// 	alert(content)
// })

$(document).ready(function() {
	
	$("h1").click(function() {
		$(this).animate({left: "250px",})
		// $(this).css()
		

		 $(this).mouseenter(function() {
			 $(this).css("background-color", "blue").fadeOut(100)
			 $(this).fadeIn(100)
		 }).mouseleave(function() {
			 $(this).css("background-color", "blue").fadeOut(100)
			 $(this).fadeIn(100)
		 })

		       

	}).mouseleave(function() {
		// $(this).css("background-color", "red")


		$(this).mouseenter(function() {
			$(this).fadeOut(1000)
			$(this).css("background-color", "red").fadeIn(100)
		}).mouseleave(function() {
			$(this).fadeOut(1000)
			$(this).css("background-color", "blue").fadeIn(100)
		})
	})


	alert("the system is ready");

	  // $("h1").css("background-color")

})




// var content =  $("#item-list").html();
//
// alert(content);
//
// // Similar to .innerHTML method
// // $(".class").html
//
// // similar to .style method
// //$("#id");.css
//
// //this how we select an element by id
//
// // $("#some-id");
// //



