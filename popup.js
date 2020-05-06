$('.gradient_course button').click(show_pop_up);
$('.icon_cancel_wrap').click(close_pop_up);

function show_pop_up() {
	$('.popup_overlay').css({'display':'block'});
}

function close_pop_up() {
	$('.popup_overlay').css({'display':'none'});
}