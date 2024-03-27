import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const appetizers = [
  {
    title: 'Mini Brioche Lobster Rolls',
    price: '$20',
    tags: 'Fresh lobster tossed in a mixture of mayonnaise, lemon juice, and herbs served in toasted brioche rolls',
  },
  {
    title: 'Duck confit Spring Rolls',
    price: '$15',
    tags: 'Foie Gras, cabbage, and plum sauce',
  },
  {
    title: 'Brie & Prosciutto Bruschetta',
    price: '$12',
    tags: 'Ruffle of prosciutto with a block of brie on bruschetta',
  },
  {
    title: 'Calamari',
    price: '$11',
    tags: 'Lightly fried calamari with mustard sauce and Thai Green Chili sauce',
  },
  {
    title: 'Escargot',
    price: '$14',
    tags: 'Served with chanterelle and shiitake mushrooms with a herb, garlic, and Cognac sauce',
  },
];

const entreesP1 = [
  {
    title: 'Sautéed Divers Sea Scallops',
    price: '$20',
    tags: 'Mixed vegetables, mashed potato & lemon basil wine butter sauce',
  },
  {
    title: 'Chicken Piccata',
    price: '$15',
    tags: 'Finished with caper lemon butter sauce, with mashed potatoes and sautéed vegetables',
  },
  {
    title: 'Grilled Atlantic Salmon',
    price: '$16',
    tags: 'Mashed potato, mixed vegetable & lemon basil wine butter',
  },
  {
    title: 'Goat Cheese Ravioli',
    price: '$14',
    tags: 'Spring vegetables & robust tomato sauce',
  },
  {
    title: 'Grilled Filet Medallions',
    price: '$22',
    tags: 'Mashed potatoes, vegetables, & red wine sauce',
  },
];

const entreesP2 = [
  {
    title: 'Skillet-Roasted Chicken',
    price: '$18',
    tags: 'Airline chicken breast served with simmered vegetables in butter sauce',
  },
  {
    title: 'Salmon Fillet',
    price: '$37',
    tags: 'Broiled with lemon, butter & parsley',
  },
  {
    title: 'Ribeye',
    price: '$68',
    tags: 'USDA Prime 16 oz cut',
  },
  {
    title: 'Petite Filet',
    price: '$50',
    tags: 'Tender 8 oz filet',
  },
  {
    title: 'Garlic Crusted Sea Bass',
    price: '$48',
    tags: 'Chilean sea bass, panko-garlic crust, lemon butter & baby spinach',
  },
];

const desserts = [
  {
    title: 'Apple Crumb Tart',
    price: '$12',
    tags: 'Granny Smith apples baked in a flaky pastry with streusel crust; served with vanilla ice cream',
  },
  {
    title: 'Chocolate Cake',
    price: '$12',
    tags: 'Flourless chocolate cake blended with espresso and topped with a chocolate ganache',
  },
  {
    title: 'Chocolate Mousse',
    price: '$12',
    tags: 'Chocolate mousse with chocolate shavings',
  },
  {
    title: 'Coconut Flan',
    price: '$8',
    tags: 'Flan with caramelized rum',
  },
  {
    title: 'Crème Brûlée',
    price: '$10',
    tags: 'Vanilla custard with caramelized sugar',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, appetizers, entreesP1, entreesP2, desserts, awards };
