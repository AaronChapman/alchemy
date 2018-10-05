/*

READ NO FURTHER ~ SPOILERS BELOW

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+ randomized message for successful/unsusccessful alchemization
+ array of available ingredients should have a two-state sort toggle
	+ order acquired
	+ alphabetically
+ add a clear workspace button
+ write a method & toggle for scraping all ingredients

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
var ingredient_list = `
! [ingredient]: air
~ air + air = wind
~ air + earth = dust
~ air + fire = smoke
~ air + insect = fly
~ air + mud = earth
~ air + water = rain
~

! [ingredient]: algae
~

! [ingredient]: ash
~

! [ingredient]: bacteria
~ bacteria + energy = mite
~

! [ingredient]: bee
~

! [ingredient]: beetle
~

! [ingredient]: boulder
~ boulder + time = rock
~

! [ingredient]: brick
~ brick + brick = wall
~

! [ingredient]: brook
~

! [ingredient]: bush
~

! [ingredient]: charcoal
~

! [ingredient]: clay
~ clay + fire = brick
~ clay + pressure = pottery
~

! [ingredient]: coal
~ coal + fire = energy
~ coal + fire = heat
~ coal + fire = smoke
~

! [ingredient]: earth
~ earth + air = dust
~ earth + bacteria = mite
~ earth + earth = mound
~ earth + earth = pressure
~ earth + fire = ash
~ earth + insect = beetle
~ earth + lake = clay
~ earth + moss = soil
~ earth + pressure = rock
~ earth + time = rock
~ earth + water = mud
~

! [ingredient]: energy
~

! [ingredient]: era
~ 

! [ingredient]: dust
~

! [ingredient]: fire
~ fire + air = smoke
~ fire + brook = steam
~ fire + ingredient = ash
~ fire + energy = heat
~ fire + fire = plasma
~ fire + fire = energy
~ fire + mud = mud brick
~ fire + puddle = steam
~ fire + water = steam
~

! [ingredient]: fish
~ fish + fire = meat
~ 

! [ingredient]: flood
~

! [ingredient]: fly
~ fly + energy = bee
~

! [ingredient]: forest
~ forest + rain = rainforest
~

! [ingredient]: frog
~ frog + energy = salamander
~

! [ingredient]: fungus
~ fungus + heat = spore
~

! [ingredient]: heat
~

! [ingredient]: hill
~ hill + hill = mountain
~ hill + hill = pressure
~ hill + time = mound
~

! [ingredient]: honey
~

! [ingredient]: hurricane
~

! [ingredient]: insect
~

! [ingredient]: lake
~ lake + light = algae
~ lake + light = bacteria
~

! [ingredient]: light
~

! [ingredient]: lightning
~

! [ingredient]: log
~ log + time = soil
~

! [ingredient]: meat
~

! [ingredient]: mite
~ mite + energy = insect
~

! [ingredient]: moss
~ moss + bacteria = fungus
~

! [ingredient]: mosquito
~

! [ingredient]: mound
~ mound + mound = hill
~ mound + mound = pressure
~

! [ingredient]: mountain 
~ mountain + mountain = mountain range
~ mountain + mountain = pressure
~ mountain + time = hill
~

! [ingredient]: mountain range
~ mountain range + time = mountain
~

! [ingredient]: mud
~

! [ingredient]: mud brick
~ mud brick + mud brick = mud hut
~

! [ingredient]: mud hut
~ mud hut + mud hut = tribe
~

! [ingredient]: ocean
~ ocean + algae = seaweed
~ ocean + bacteria = plankton
~ ocean + boulder = sand
~ ocean + hurricane = tsunami
~ ocean + light = seaweed
~ ocean + rock = sand
~ ocean + fish = tuna
~

! [ingredient]: pond
~ pond + light = algae
~ pond + light = bacteria
~

~ [ingredient]: pottery
~

! [ingredient]: plankton
~ plankton + energy = tadpole
~

! [ingredient]: plant
~ plant + water = bush
~ plant + rain = tree
~ plant + bee = pollen
~ plant + bee = honey
~

! [ingredient]: plasma
~ plasma + plasma = light
~

! [ingredient]: pollen
~

! [ingredient]: puddle
~ puddle + energy = brook
~

! [ingredient]: rain
~ rain + wind = storm
~

! [ingredient]: rainforest
~ rainforest + era = coal
~

! [ingredient]: river
~ river + energy = rapids
~ river + rain = flood
~ river + fish = salmon
~

! [ingredient]: rock
~ rock + algae = moss
~ rock + rock = boulder
~

! [ingredient]: salamander
~

! [ingredient]: salmon
~

! [ingredient]: sand
~

! [ingredient]: sapling
~ sapling + water = plant
~ sapling + rain = plant
~

! [ingredient]: sea
~ sea + algae = seaweed
~ sea + light = seaweed
~

! [ingredient]: seaweed
~

! [ingredient]: seed
~ seed + soil = sapling
~

! [ingredient]: smoke
~ smoke + time = air
~

! [ingredient]: silt
~ silt + heat = dust
~

! [ingredient]: soil
~ soil + time = earth
~

! [ingredient]: spore
~ spore + time = seed
~

! [ingredient]: steam
~ steam + time = air
~

! [ingredient]: storm
~ storm + energy = lightning
~ storm + wind = hurricane
~

! [ingredient]: stream 
~

! [ingredient]: tadpole
~ tadpole + time = frog
~ tadpole + energy = fish
~

! [ingredient]: time
~ time + time = era
~

! [ingredient]: tornado
~

! [ingredient]: tree
~ tree + bush = vine
~ tree + lightning = fire
~ tree + lightning = charcoal
~ tree + time = log
~ tree + tree = forest
~ tree + vine = log
~

! [ingredient]: tribe
~

! [ingredient]: tuna
~

! [ingredient]: vine
~

! [ingredient]: wall
~

! [ingredient]: water
~ water + air = rain
~ water + brook = stream
~ water + earth = mud
~ water + fire = steam
~ water + heat = boiling water
~ water + insect = mosquito
~ water + lake = sea
~ water + mud = silt
~ water + pond = lake
~ water + puddle = pond
~ water + sea = ocean
~ water + stream = river
~ water + water = puddle
~

! [ingredient]: wind
~ wind + energy = tornado
~ 
`;