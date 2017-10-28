
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

	$('.change-eat').on('click', function(event) {
		var id = $(this).data("id");
		var newDevoured = $(this).data('newdevoured');
		console.log('id', id);
		console.log('newdevoured', newDevoured);
		var  newDevouredState = {
			devoured: newDevoured
		};

		$.ajax('/api/burgers/' + id, {
			type: "PUT",
			data: newDevouredState
		}).then(
			function() {
				console.log('changed devour to', newDevoured);
				location.reload();
			}
		);
	});

	// $('.delete-burger').on('click', function(event) {
	// 	var id = $(this).data('id');

	// 	$.ajax('/api/burgers/' + id, {
	// 		type: "DELETE"
	// 	}).then(
	// 		function() {
	// 			console.log('deleted burger', id);
	// 		}
	// 	)
	// })
};
