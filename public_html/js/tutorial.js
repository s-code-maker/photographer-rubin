$("#submit_btn").click(function() {                /*Функция отслеживающая нажатие кнопки*/     
	
    // собираем данные с формы
    var name = $('#name').val();
    var tel  = $('#tel').val();
    var text = $('#text').val();

    /*Записываем строку переменных(внутри которых значения),которую хотим передать скрипту ajax*/
    
		var dataString = '&name='+ name + '&tel=' + tel + '&text=' + text;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "bin/mail_small.php",                   /*php скрипт,который обрабатывает передаваемые нами данные*/
      data: dataString,                            /*Функция обрабатывает значения из нащей строки dataString с вызовом php скрипта*/
      success: function() {
        $('#contact_form').html("<div id='message'></div>");          /*id нашей формы,меняем содержимое блока с формой после отправки на новое содержимое с информацией об успешной отправки,*/
        $('#message').html("<h2>Сообщение успешно отправлено!</h2>")   /*При успешной отправке выйдет сообщение*/
        // .append("<p>Спасибо!</p>")
        .hide()
        .fadeIn(1500, function() {                                            /*Время,через которое выйдет картинка*/
          $('#message').append("<img id='checkmark' src='img/check.png' />"); /*При успешной отправке выйдет картинка*/
        });
      }
     });
    return false;                       /*Если страница не обновляется*/
	});
runOnLoad(function(){
  $("input#name").select().focus();
});
