$(".filter-range-cost").slider({
    min: 0,
    max: 10000,
    values: [2000, 6000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
		$(".catalog-content__filter-range-left").val(ui.values[ 0 ] + " руб.");   
		$(".catalog-content__filter-range-right").val(ui.values[ 1 ] + " руб.");  
	}	
});
$(".catalog-content__filter-range-left").val($(".filter-range-cost").slider("values", 0) + " руб.");
$(".catalog-content__filter-range-right").val($(".filter-range-cost").slider("values", 1) + " руб.");
$(document).focusout(function() {
	var input_left = $(".catalog-content__filter-range-left").val().replace(/[^0-9]/g, ''),	
	opt_left = $(".filter-range-cost").slider("option", "min"),
	where_right = $(".filter-range-cost").slider("values", 1),
	input_right = $(".catalog-content__filter-range-right").val().replace(/[^0-9]/g, ''),	
	opt_right = $(".filter-range-cost").slider("option", "max"),
	where_left = $(".filter-range-cost").slider("values", 0); 
	if (input_left > where_right) { 
		input_left = where_right; 
	}
	if (input_left < opt_left) {
		input_left = opt_left; 
	}
	if (input_left == "") {
		input_left = 0;	
	}		
	if (input_right < where_left) { 
		input_right = where_left; 
	}
	if (input_right > opt_right) {
		input_right = opt_right; 
	}
	if (input_right == "") {
		input_right = 0;	
	}	
	$(".filter-range-cost").slider( "values", [ input_left, input_right ] );	
	$(".catalog-content__filter-range-left").val($(".filter-range-cost").slider("values", 0) + " руб.");
	$(".catalog-content__filter-range-right").val($(".filter-range-cost").slider("values", 1) + " руб.");	
	
});
