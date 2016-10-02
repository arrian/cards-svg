var fs = require('fs'),
	suffix = ['spades', 'clubs', 'hearts', 'diamonds'],
	prefix = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'],
	suitCount = 13,
	cardCount = 52,
	cardIndex,
	suitIndex,
	mod,
	div;

function pad(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}

for(cardIndex = 0; cardIndex < cardCount; cardIndex++) {
	mod = cardIndex % suitCount;
	div = Math.floor(cardIndex / suitCount);

	fs.rename('./svg/cards-' + pad(cardIndex + 1, 2) + '.svg', './svg/' + prefix[mod] + '-' + suffix[div] + '.svg', function(err) {
	    if ( err ) console.log('Rename error: ' + err);
	});
}