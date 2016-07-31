// wrap this in a closure
(function(){
var app = angular.module('store', []);

app.controller('StoreController', function(){
  this.drink = beer;
});

var beer = {
name: 'India Pale Ale',
size: 'Pint',
price: 6 + ' bucks',
description: 'For all the bandwagon hop heads and fickle, uninformed craft beer dabblers... this beer is not about following the crowd or joining the masses of taste bud destroying, one and done beers…this is a different type of IPA; the unassuming, yet assertive type; the type that need not outdo another because this beer simply is what it is – upfront hoppy, floral character complimenting a grainy, classic English malt profile'
}

})();
