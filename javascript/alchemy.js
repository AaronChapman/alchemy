var available_ingredients = ['air', 'earth', 'fire', 'time', 'water'];
var ingredient_matches = [];

function check_active_ingredients_for_matches(first_ingredient, second_ingredient) {
	for (var i = 0; i < ingredient_matches.length; i++) {
		if (ingredient_matches[i].name === first_ingredient) {
			for (var j = 0; j < ingredient_matches[i].matches.length; j++) {
				if (ingredient_matches[i].matches[j].ingredient === second_ingredient) {
					var ingredient_produced = ingredient_matches[i].matches[j].product;

					available_ingredients.push(ingredient_produced);

					$('.produced-ingredients').append('<div class="ingredient" data-ingredient="' + ingredient_produced + '"><img src="images/' + ingredient_produced + '.png"><label class="ingredient-label">' + ingredient_produced + '</label></div>');

					if ($('.available-ingredients').find('.ingredient[data-ingredient="' + ingredient_produced + '"]').length === 0) {
						$('.available-ingredients').append('<div class="ingredient" data-ingredient="' + ingredient_produced + '" onclick="ingredient_clicked($(this));"><img src="images/' + ingredient_produced + '.png"><label class="ingredient-label">' + ingredient_produced + '</label></div>');
					}
				}
			}
		}
	}
}

function fill_available_ingredients_container() {
	available_ingredients.forEach(function (item) {
		$('.available-ingredients').append('<div class="ingredient" data-ingredient="' + item + '" onclick="ingredient_clicked($(this));"><img src="images/' + item + '.png"><label class="ingredient-label">' + item + '</label></div>');
	});
}

function fill_ingredient_matches_array() {
	var ingredients = ingredient_list.split('! [ingredient]:');

	for (var i = 0; i < ingredients.length; i++) {
		var ingredient = ingredients[i].substring(0, ingredients[i].indexOf('~')).trim();
		var match_ingredients = ingredients[i].substring(ingredients[i].indexOf('~'), ingredients[i].length).trim().split('~');
		var matches = [];

		match_ingredients.pop();
		match_ingredients.shift();

		for (var j = 0; j < match_ingredients.length; j++) {
			var match = match_ingredients[j].substring(4 + ingredient.length, match_ingredients[j].indexOf('=')).trim();
			var product = match_ingredients[j].substring(match_ingredients[j].indexOf('=') + 2, match_ingredients[j].length).trim();

			console.log(match, product);

			matches.push({
				'ingredient': match,
				'product': product
			});
		}

		ingredient_matches.push({
			'name': ingredient,
			'matches': matches
		});
	}
}

function ingredient_clicked(ingredient_clicked) {
	if ($('.active-ingredients .ingredient').length < 2) {
		var ingredient = ingredient_clicked.attr('data-ingredient');

		$('.active-ingredients').append('<div class="ingredient" data-ingredient="' + ingredient + '" onclick="$(this).remove()"><img src="images/' + ingredient + '.png"><label class="ingredient-label">' + ingredient + '</label></div>');

		check_active_ingredients_for_matches($('.active-ingredients .ingredient').eq(0).attr('data-ingredient'), $('.active-ingredients .ingredient').eq(1).attr('data-ingredient'));
	} else {
		console.log('workspace full message');
	}
}

$(document).ready(function () {
	fill_available_ingredients_container();
	fill_ingredient_matches_array();
});