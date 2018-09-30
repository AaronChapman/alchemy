var available_ingredients = ['air', 'earth', 'fire', 'time', 'water'];

function fill_available_ingredients_container() {
	available_ingredients.forEach(function(item) {
		$('.available-ingredients').append('<div class="ingredient" data-ingredient="' + item + '"><img src="images/' + item + '.png"><label class="ingredient-label">' + item + '</label></div>');
	});
}

$(document).ready(function () {
	fill_available_ingredients_container();
	
	$('.available-ingredients .ingredient').click(function() {
		var ingredient = $(this).attr('data-ingredient');
		
		$('.active-ingredients').append('<div class="ingredient" data-ingredient="' + ingredient + '"><img src="images/' + ingredient + '.png"><label class="ingredient-label">' + ingredient + '</label></div>');
	});
});