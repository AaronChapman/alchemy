var available_ingredients = ['air', 'water', 'earth', 'fire', 'time'];
var ingredient_matches = [];

function check_active_ingredients_for_matches() {
	var first_ingredient = $('.active-ingredients .ingredient').eq(0).attr('data-ingredient');
	var second_ingredient = $('.active-ingredients .ingredient').eq(1).attr('data-ingredient');

	for (var i = 0; i < ingredient_matches.length; i++) {
		if (ingredient_matches[i].name === first_ingredient) {
			for (var j = 0; j < ingredient_matches[i].matches.length; j++) {
				if (ingredient_matches[i].matches[j].ingredient === second_ingredient) {
					update_ingredient_containers(ingredient_matches[i].matches[j].product);
				}
			}
		} else if (ingredient_matches[i].name === second_ingredient) {
			for (var j = 0; j < ingredient_matches[i].matches.length; j++) {
				if (ingredient_matches[i].matches[j].ingredient === first_ingredient) {
					update_ingredient_containers(ingredient_matches[i].matches[j].product);
				}
			}
		}
	}

	$('.produced-ingredients').each(function () {
		if ($(this).find('.ingredient').length > 5) {
			$(this).find('.ingredient:last').remove();
		}
	});
}

function fill_available_ingredients_container() {
	available_ingredients.forEach(function (item) {
		$('.list-of-ingredients').append('<div class="ingredient" data-ingredient="' + item + '" onclick="ingredient_clicked($(this));"><ul class="ingredient_button_table"><li><img src="ingredients/' + item + '.png"></li><li><label class="ingredient-label">' + item + '</label></li></ul></div>');
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
	var ingredient = ingredient_clicked.attr('data-ingredient');

	$('.active-ingredients').append('<div class="ingredient" data-ingredient="' + ingredient + '" onclick="$(this).remove()" style="opacity: 1"><ul class="ingredient_button_table"><li><img src="ingredients/' + ingredient + '.png"></li><li><label class="ingredient-label">' + ingredient + '</label></li></ul></div>');

	$('.active-ingredients').each(function () {
		if ($(this).find('.ingredient').length > 2) {
			$(this).find('.ingredient:last').remove();
		}
	});

	check_active_ingredients_for_matches();
}

function ingredioso() {
	available_ingredients = [];

	for (var i = 1; i < ingredient_matches.length; i++) {
		available_ingredients.push(ingredient_matches[i].name);
	}
}

function remove_used_ingredients_from_workspace() {
	setTimeout(function () {
		$('.active-ingredients .ingredient').css({
			'transition': 'all 1s ease-in-out',
			'opacity': '0'
		});
	}, 200);

	setTimeout(function () {
		$('.active-ingredients .ingredient').remove();
	}, 1000);
}

function update_ingredient_containers(ingredient_produced) {
	available_ingredients.push(ingredient_produced);

	if ($('.produced-ingredients').find('.ingredient[data-ingredient="' + ingredient_produced + '"]').length === 0) {
		$('.produced-ingredients').find('label:first').after('<div class="ingredient" data-ingredient="' + ingredient_produced + '" style="opacity: 1;"><ul class="ingredient_button_table"><li><img src="ingredients/' + ingredient_produced + '.png"></li><li><label class="ingredient-label">' + ingredient_produced + '</label></li></ul></div>');
	}

	if ($('.list-of-ingredients').find('.ingredient[data-ingredient="' + ingredient_produced + '"]').length === 0) {
		$('.list-of-ingredients').append('<div class="ingredient" data-ingredient="' + ingredient_produced + '" onclick="ingredient_clicked($(this));"><ul class="ingredient_button_table"><li><img src="ingredients/' + ingredient_produced + '.png"></li><li><label class="ingredient-label">' + ingredient_produced + '</label></li></ul></div>');
	}

	remove_used_ingredients_from_workspace();
}

function warp_ingredient_containers() {
	var border_radius_values = ['25px', '20px', '15px', '10px', '5px'];
	
	$('.ingredient').each(function() {
		var new_value = 
				border_radius_values[Math.floor(Math.random() * border_radius_values.length) - 1] + ' ' + border_radius_values[Math.floor(Math.random() * border_radius_values.length) - 1] + ' ' + border_radius_values[Math.floor(Math.random() * border_radius_values.length) - 1] + ' ' + border_radius_values[Math.floor(Math.random() * border_radius_values.length) - 1];

		$(this).css('border-radius', new_value);
	});
	
	setTimeout(function() {
		warp_ingredient_containers();
	}, 1500);
}

$(document).ready(function () {
	fill_available_ingredients_container();
	fill_ingredient_matches_array();
	//warp_ingredient_containers();
});