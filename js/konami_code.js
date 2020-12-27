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

var konami = {
init: function(){ 
this.cacheDom();
this.bindEvents();
},
cacheDom: function(){
this.$doc = $(document);
},
bindEvents: function() {
this.$doc.on("keydown", this.keydownFunc.bind(this));

},
keydownFunc: function(e) {
	if(e.keyCode == 59) {
		console.log("hey");
		console.log(e.keyCode);
	}

}
}


konami.init();






		
		
