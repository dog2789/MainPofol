/***** Main *****/

$(".sec-main-tit > li").each(function(i){
	$(this).stop().delay(i*200).animate({"left":0, "opacity":1}, 1500);
});

$(".sec-sub-tit > li").each(function(i){
	$(this).stop().delay(i*200).animate({"left":0, "opacity":1}, 1500);
});

(function(){
	emailjs.init("user_MBVGzbJr9AuupCOJHmeyl");
})();


document.getElementById('contact-form').addEventListener('submit', function(event) {
		event.preventDefault();
		this.contact_number.value = Math.random() * 100000 | 0;
		emailjs.sendForm('dog27890_gmail_com', 'template_t8snK9A6', this);
		alert("메일이 전송되었습니다.");
		this.reset();
});

