<?php
$name = $_POST['name'];          /*Принемаем переменную из javascript файла*/
$tel = $_POST['tel'];            /*Принемаем переменную из javascript файла*/
$text = $_POST['text'];          /*Принемаем переменную из javascript файла*/

                       /*Проверяем поля еще раз перед отправкой на сервер*/

$name = htmlspecialchars($name);       /*Проверяем на специальные символы*/
$tel = htmlspecialchars($tel);
$text = htmlspecialchars($text);

$name = urldecode($name);             /*Проверяем*/
$tel = urldecode($tel);
$text = urldecode($text);

$name = trim($name);        /*Проверяем на пустое поле*/
$tel = trim($tel);
$text = trim($text);


if (mail("rubin.ds@yandex.ru", "Заявка с сайта",        /*mail - функция отправки данных на сервер*/
 "Имя: ".$name. 
 ". Телефон: ".$tel.
 ". Текст:  ".$text ,
 "From: mail@.pro \r\n"))


 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>