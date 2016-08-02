// wrap this in a closure
(function(){
var app = angular.module('ptfa', []);

app.controller('PresentTenseController', function(){
  this.drinks = beers;
});

app.controller('PresentTenseSeasonal', function(){
  this.drinks = seasonals;
});

app.controller('PresentTenseComingSoon', function(){
  this.drinks = comingSoon;
});

app.controller('SectionController', function(){
  this.tab = 1;
  this.selectTab = function(setTab) {
    this.tab = setTab;
  };
  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };
});

var beers = [
{
  name: 'India Pale Ale',
  abv:5.6,
  fg: 1.011,
  ibu: 46,
  description: 'For all the bandwagon hop heads and fickle, uninformed craft beer dabblers... this beer is not about following the crowd or joining the masses of taste bud destroying, one and done beers…this is a different type of IPA; the unassuming, yet assertive type; the type that need not outdo another because this beer simply is what it is – upfront hoppy, floral character complimenting a grainy, classic English malt profile',
  canPurchase: true,
  image: 'images/ipa.png',
},
{
  name: 'English Mild',
  abv: 3.4,
  fg: 1.009,
  ibu: 20,
  description: 'A subtle, yet complex flavor profile. Up front rich maltiness dominates, but to the more distinguishing palette a slight grassy note from the Goldings hops emerges before the dry, crisp finish. A very easy to drink “session” beer enjoyed for centuries by the hard working English middle class.',
  canPurchase:true,
  image: 'images/mild.png',


},
{
  name: 'Extra Special Bitter',
  abv: 4.4,
  fg: 1.011,
  ibu: 30,
  description:'Inspired by the prototypical Fuller’s ESB. This ale exudes custom and tradition. Fermented in open stainless steel tanks, distinctive fruity esters and slight butterscotch undertones highlight the Englishness of this true English ale. Dryhopped with Goldings to create a very pleasing, full flavor that finishes with a refined and articulate character.',
  canPurchase: true,
  image: 'images/esb.png',

},
{
  name: 'Oatmeal Stout',
  abv: 5.3,
  fg: 1.014,
  ibu: 24,
  description: 'Thick and creamy with pure, unadulterated roasty sweetness. Black as night, with very little bitterness coming through, finishing smooth as silk. A complex malt profile contributes recognizable fruitiness and caramel flavor to round out this dark and fulfilling stout.',
  canPurchase: true,
  image: 'images/stout.png',
},
];

var seasonals = [
{
  name: 'Burton Ale',
  abv: 5.4,
  fg: 1.009,
  ibu: 23,
  description: 'A beer that has earned the distinction of carrying the name of one of history’s greatest brewing cities. This adaptation harkens back to the Ind Coope original - a pale ale which finds its identity in its water establishing a firm and crisp bitterness from an engimatic concoction of English hops. Smooth, crisp, and refreshing – an homage to the far distant forefather of today’s IPA.',
  canPurchase: true,
  image: 'images/burton.png',
},
{
  name: 'Ordinary Bitter',
  abv: 4.0,
  fg: 1.010,
  ibu: 36,
  description: 'The bready, biscuity malt flavor establishes a distinct English character to balance a fruity and floral hop assertiveness. Medium bodied with a satisfying bitter finish.',
  canPurchase: true,
  image: 'images/ordinary.png',

},
{
  name: 'Premium Bitter',
  abv: 4.8,
  fg: 1.012,
  ibu: 40,
  description: 'Bright and complex. Slightly nutty, toasty, and honey sweet accentuated with subtle yet complex fruity esters. Graham cracker malt profile allows a traditional hop character to flourish.',
  canPurchase: true,
  image: 'images/premium.png',

},
{
  name: 'Brown Porter',
  abv: 5.1,
  fg: 1.012,
  ibu: 28,
  description: 'This beer does not fit in a box; it transcends any label that you would put on it. Not quite a porter, not quite a brown ale. The deep, roasty character of a porter finds its way into a deep amber ale with subtle dried fruit qualities and an easy to drink finish.',
  canPurchase: true,
  image: 'images/porter.png',

},
{
  name: 'Summer Ale',
  abv: 5.1,
  fg: 1.010,
  ibu: 26,
  description: 'The quintessence of a refreshing libation. This crisp English golden ale is a perfect complement to a warm, sunny day. Malt forward with a distinct grainy character gradually finishing with an assertive spicy and floral hop note. Not too sweet, not too dry... perfect for another pint!',
  canPurchase: true,
  image: 'images/summer.png',
},
{
  name: 'Summer Brown',
  abv: 5.0,
  fg: 1.012,
  ibu: 36,
  description: 'Fully steeped in English tradition with its eyes set on the land down under. This brown ale has all of the right chocolatey and roasty notes balanced by a key lime and tropical fruit hoppiness from Australian Galaxy hops.',
  canPurchase: true,
  image: 'images/summerbrown.png'
},
];

var comingSoon = [
{
  name: 'Pale Ale',
},
{
  name: 'Barley Wine',
},
{
  name: 'Old Ale',
},
];
})();
