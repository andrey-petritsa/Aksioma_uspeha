var feedbacks = []
var feedback_pointer = 0; //Current feedback at page


feedbacks.push({parent:"Анна Сергеевна", son:"сын 13 лет", message:"Обращались за помощью в данный центр, потому что мой сын балбес и не может обучаться самостоятельно, теперь он стал очень умный и получает одни пятерки"})
feedbacks.push({parent:"Андрей Викторович", son:"дочь 8 лет", message:"Не плохо, лайк от меня!"})
feedbacks.push({parent:"Василий Дмитриевич", son:"сын 16 лет", message:"Егэ сдал и хорошо! Больше ничего не надо нам..."})

var button_next = $('.next');
var button_prev = $('.prev');
var slider = $('.feedback_slider')


button_next.click(show_next_feedback);
button_prev.click(show_prev_feedback);




function show_next_feedback() {
	feedback_pointer++;
	feedback_pointer = feedback_pointer % feedbacks.length;
	//Play animation for 1 sec
	slider.addClass('animation_hide_element_right');

	setTimeout(function() {
		slider.removeClass('animation_hide_element_right');

		//hideElementAtLeftCorner
		slider.addClass('hide_element_left')
		setTimeout(function() {
			//Set text about parent
			$('.about_parent h4').text(feedbacks[feedback_pointer]['parent']);
			$('.about_parent h5').text(feedbacks[feedback_pointer]['son']);

			//Set parent feedback
			$('.parent_feedback p').text(feedbacks[feedback_pointer]['message']);

			//Play Animation
			slider.addClass('back_element')
			//clear element
			setTimeout(function(){
				slider.removeClass('hide_element_left back_element')
			},1000)
		}, 50)
	}, 1000)
}

function show_prev_feedback() {
	feedback_pointer--;
	if (feedback_pointer < 0) {
		feedback_pointer = feedbacks.length - 1;	
	}

	//Play animation for 1 sec
	slider.addClass('animation_hide_element_left');

	setTimeout(function() {
		slider.removeClass('animation_hide_element_left');

		//hideElementAtLeftCorner
		slider.addClass('hide_element_right')
		setTimeout(function() {
			//Set text about parent
			$('.about_parent h4').text(feedbacks[feedback_pointer]['parent']);
			$('.about_parent h5').text(feedbacks[feedback_pointer]['son']);

			//Set parent feedback
			$('.parent_feedback p').text(feedbacks[feedback_pointer]['message']);

			//Play Animation
			slider.addClass('back_element')
			//clear element
			setTimeout(function(){
				slider.removeClass('hide_element_right back_element')
			},1000)
		}, 50)
	}, 1000)


}




