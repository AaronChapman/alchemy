var available_ingredients = ['air', 'earth', 'fire', 'time', 'water'];
var ingredient_matches = [{
		'name': 'air',
		'matches': [{
			'ingredient': 'air',
			'product': 'wind'
								}, {
			'ingredient': 'earth',
			'product': 'dust'
								}, {
			'ingredient': 'fire',
			'product': 'smoke'
								}, {
			'ingredient': 'water',
			'product': 'rain'
								}]
	}, {
		'name': 'algae',
		'matches': []
	}
];

function check_active_ingredients_for_matches (first_ingredient, second_ingredient) {
	for (var i = 0; i < ingredient_matches.length; i++) {
		if (ingredient_matches[i].name === first_ingredient) {
			for (var j = 0; j < ingredient_matches[i].matches.length; j++) {
				if (ingredient_matches[i].matches[j].ingredient === second_ingredient) {
					var ingredient_produced = ingredient_matches[i].matches[j].product;
					
					available_ingredients.push(ingredient_produced);

					$('.produced-ingredients').append('<div class="ingredient" data-ingredient="' + ingredient_produced + '"><img src="images/' + ingredient_produced + '.png"><label class="ingredient-label">' + ingredient_produced + '</label></div>');
				}
			}
		}
	}
}

function fill_available_ingredients_container () {
	available_ingredients.forEach(function (item) {
		$('.available-ingredients').append('<div class="ingredient" data-ingredient="' + item + '"><img src="images/' + item + '.png"><label class="ingredient-label">' + item + '</label></div>');
	});
}

$(document).ready(function () {
	fill_available_ingredients_container();

	$('.available-ingredients .ingredient').click(function () {
		if ($('.active-ingredients .ingredient').length < 2) {
			var ingredient = $(this).attr('data-ingredient');

			$('.active-ingredients').append('<div class="ingredient" data-ingredient="' + ingredient + '" onclick="$(this).remove()"><img src="images/' + ingredient + '.png"><label class="ingredient-label">' + ingredient + '</label></div>');

			check_active_ingredients_for_matches($('.active-ingredients .ingredient').eq(0).attr('data-ingredient'), $('.active-ingredients .ingredient').eq(1).attr('data-ingredient'));
		} else {
			console.log('workspace full message');
		}
	});
});