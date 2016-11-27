jQuery(document).ready(function($) {    
	//selector đến menu cần làm việc
	var TopFixMenu = $("#fixNav");
	// dùng sự kiện cuộn chuột để bắt thông tin đã cuộn được chiều dài là bao nhiêu.
	var scrollTopOld = 0;
	TopFixMenu.show();
    $(window).scroll(function(){
    // Nếu scrollUp thì show Menu
	if(scrollTopOld > $(this).scrollTop()){//scroll up
		TopFixMenu.show();
	}
	else{
		TopFixMenu.hide();
	}
	scrollTopOld = $(this).scrollTop();
		// Nếu cuộn được hơn 150px rồi
        /*if($(this).scrollTop()>150){
        // Tiến hành show menu ra    
        TopFixMenu.show();
        }else{
        // Ngược lại, nhỏ hơn 150px thì hide menu đi.
            TopFixMenu.hide();
        }*/
	});
	var buttonEvent = $("#event01");
	buttonEvent.click(function(){
        alert("Button event are click.");
    });

    var buttonPlus = $("#button-plus");
    var buttonMinus = $("#button-minus");
    var buttonDiv = $("#button-div");
    var buttonMultiply = $("#button-multiply");
    var value01 = $("#value01");
    var value02 = $("#value02");
    var result = $("#result");
    buttonMultiply.click(function(){
        alert("Value is: "+value01.value);
    });
});