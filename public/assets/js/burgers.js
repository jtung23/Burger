
console.log('burgers.js runs');
window.onload=function(){
	// var submit = document.getElementById('submit');
	// submit.addEventListener('click', function(event) {
	// 	console.log('CLICKED');
	// }, false);
	$('#submit').on('click', function(event) {
	event.preventDefault();
	console.log('submit button clicked')
	var newBurger = {
		burger: $('#burg').val().trim(),
		devoured: false
	};
	console.log(newBurger);
	$.ajax('/api/burgers', {
		type: "POST",
		data: newBurger
	}).then(
		function() {
			console.log('added new burger');
			location.reload();
		})
});
};
