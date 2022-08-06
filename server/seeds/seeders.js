const db = require('./connection');
const { User, Drink, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Alcoholic Drinks' },
        { name: 'Non-Alcholic Drinks' },
       
    ]);

    console.log('categories seeded');

    await Drink.deleteMany();

    const drinks = await Drink.insertMany([
        {
            name: 'Margarita',
            description: 'A classic lime cocktail with lime juice, tequila and agave syrup.',
            image: 'client/public/Images/margarita.jpg',
            category: categories[0]._id,
            price: 7.50,
            quantity: 1
        },
        {
            name: 'Old Fashion',
            description: 'Oldy but goldy drink Traditionally made with bourbon or rye whiskey, lightly sweetened with sugar and aromatised with bitters.',
            image: 'client/public/Images/oldfashion.jpg',
            category: categories[0]._id,
            price: 9.50,
            quantity: 1
        },
        {
            name: 'Martini',
            description: 'a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist.',
            image: 'client/public/Images/martini.jpg',
            category: categories[0]._id,
            price: 8.75,
            quantity: 1
        },
        {
            name: 'Long Island Ice Tea',
            description: 'Cocktail made with vodka, tequila, light rum, triple sec, gin, and a splash of cola, which gives the drink the same hue as iced tea.',
            image: 'client/public/Images/longislandicetea.jpg',
            category: categories[0]._id,
            price: 9.00,
            quantity: 1
        },
        {
            name: 'Sherly Temple',
            description: 'Sweet lemon or lime soda with a sweet-tart like cherry flavor from grenadine, similar to an Italian Soda.',
            image: 'client/public/Images/shirleytemple.jpg',
            category: categories[1]._id,
            price: 2.25,
            quantity: 1
        },
        {
            name: 'Suicide',
            description: 'A cup filled to the brim with every single soft drink available at a restaurants soda machine',
            image: 'client/public/Images/suicidenoalcohol.jpg',
            category: categories[1]._id,
            price: 2.25,
            quantity: 1
        },
        {
            name: 'Ginger ale',
            description: 'A carbonated beverage made with ginger root and a sweetener.',
            image: 'client/public/Images/gingerale.jpg',
            category: categories[1]._id,
            price: 3.50,
            quantity: 1
        },
        {
            name: 'virgin Mojito',
            description: 'A refreshing drink blend of mint and lemon flavours with no rum',
            image: 'client/public/Images/viginmojito.jpg',
            category: categories[1]._id,
            price: 5.75,
            quantity: 1
        },
        {
            name: 'Lavender Lemonade',
            description: 'A lavender infused lemonade',
            image: 'client/public/Images/lavenderlemonade.jpg',
            category: categories[1]._id,
            price: 4.25,
            quantity: 1
        },
        {
            name: 'zombie',
            description: 'A famous tropical rum cocktail. It is a tasty blend of rum and fruit juices.',
            image: 'client/public/Images/zombiecocktail.jpg',
            category: categories[0]._id,
            price: 9.25,
            quantity: 1
        },
    ]);

    console.log('drinks seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Oscar',
        lastName: 'Salgado',
        email: 'oscar@test.com',
        password: 'Mcrtopic101',
        orders: [
            {
                drinks: [drinks[0]._id, drinks[0]._id, drinks[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Laura',
        lastName: 'Antunez',
        email: '420@testmail.com',
        password: 'lit101'
    });

    console.log('users seeded');

    process.exit();
});