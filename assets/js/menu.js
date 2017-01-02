$(function() {
	// Selector đến menu cần làm việc
	var topFixMenu = $("#fixNav");
	// Dùng sự kiện cuộn chuột để bắt thông tin đã cuộn được chiều dài là bao nhiêu.
	var scrollTopOld = 0;
	topFixMenu.show();
    $(window).scroll(function() {
        // Nếu scrollUp thì show Menu
    	if(scrollTopOld > $(this).scrollTop()) { // Scroll up
    		topFixMenu.show();
    	} else {
    		topFixMenu.hide();
    	}
    	scrollTopOld = $(this).scrollTop();
		// Nếu cuộn được hơn 150px rồi
        /*if($(this).scrollTop()>150){
        // Tiến hành show menu ra    
        topFixMenu.show();
        }else{
        // Ngược lại, nhỏ hơn 150px thì hide menu đi.
            topFixMenu.hide();
        }*/
	});
});