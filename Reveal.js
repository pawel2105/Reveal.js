$(document).ready(function() {
	//all divs with hidables class are hidden by default.
	$(".hidables").hide();
	//except the hidable class div with the id of flash_notice (change this to whatever id you need).
	$(".hidables#flash_notice").show()	
	
	$(".icn").click(function() {
		//this finds sequential divs and hides them.
	    var num = this.id.match(/\d+/)[0];
	    $(".hidables").hide("fast");
		//you can either set it to slow or fast.
	    $("#section_" + num).show("fast");
	});
});