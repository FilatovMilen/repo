/* JQuerry for creating a slide-show with all the features */        
var n = 1;
    
function firstFeature() {
	
	$(".content-switcher").hide();
	$("#feature1").show();
	$(".highlights").find("li").each(function() {
		$(this).removeClass();
	})
    
	n = 1;
    
	$(".highlights").find("li").each(function(){
		if ($(this).attr("id") == ("li-"+n)) {
			$(this).addClass("highlighted-feature");
        }
    })
    
    return false;        
}
     
function lastFeature() {
	
	$(".content-switcher").hide();
	$("#feature13").show();
	$(".highlights").find("li").each(function() {
		$(this).removeClass();
	})
    
	n = 13;
    
	$(".highlights").find("li").each(function(){
		if ($(this).attr("id") == ("li-"+n)) {
			$(this).addClass("highlighted-feature");
		}
	})
    
	return false;    	
}
     
function nextFeature() {
    	 
	$(".highlights").find("li").each(function() {
		$(this).removeClass();
	})
    
	if(n == 13) {
		
		n = 1;
        
		$(".content-switcher").hide();
        $("#feature"+n).show();           
        } else {
             n++;
             $(".content-switcher").hide();
             $("#feature"+n).show();
        }
    	
		$(".highlights").find("li").each(function(){
			if ($(this).attr("id") == ("li-"+n)) {
				$(this).addClass("highlighted-feature");
             }
         })
}
     
function previousFeature() {
    	   
	$(".highlights").find("li").each(function() {
		$(this).removeClass();
    })
    
    if(n == 1) {
    	
    	n = 13;
    	$(".content-switcher").hide();
        	$("#feature"+n).show();
        } else {
        	n--;
    		$(".content-switcher").hide();
            $("#feature"+n).show();
        }
    	   $(".highlights").find("li").each(function(){
               if ($(this).attr("id") == ("li-"+n)) {
            	   $(this).addClass("highlighted-feature");
               }
           })
        return false;    	   
}