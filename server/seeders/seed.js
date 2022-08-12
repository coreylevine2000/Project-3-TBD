const db = require('../config/connection');
const { User, Drink, Options } = require('../models');
// import Margarita from '../../client/src/images/margarita.jpg'
// import OldFashion from '../../client/src/images/oldfashion.jpg'
// import Martini from '../../client/src/images/martini.jpg'
// import LongIslandTea from '../../client/src/images/longislandicetea.jpg'
// import Gingerale from '../../client/src/images/gingerale.jpg'
// import VMojito from '../../client/src/images/viginmojito.jpg'
// import Suicide from '../../client/src/images/suicidenoalcohol.jpg'


db.once('open', async () => {
    await Options.deleteMany();

    const options = await Options.insertMany([
        { name: 'Beer' },
        { name: 'Liquor' },
        { name: 'Non-Alcoholic' },
    ]);

    console.log('categories seeded');
    console.log(options[1]._id)
    

    await Drink.deleteMany();

    const drinks = await Drink.insertMany([
      
        {
            name: 'Margarita',
            description: 'A classic lime cocktail with lime juice, tequila and agave syrup.',
            image: "../../client/src/images/margarita.jpg",
            options: {name: 'Test'},
            price: 7.50,
            // quantity: 1
        },
        {
            name: 'Old Fashion',
            description: 'Oldy but goldy drink Traditionally made with bourbon or rye whiskey, lightly sweetened with sugar and aromatised with bitters.',
            image: '../../client/src/images/oldfashion.jpg',
            options: options[1]._id,
            price: 9.50,
            // quantity: 1
        },
        // {
        //     name: 'Martini',
        //     description: 'a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist.',
        //     image: '../../client/src/images/martini.jpg',
        //     options: [options[1]._id],
        //     price: 8.75,
        //     quantity: 1
        // },
        // {
        //     name: 'Long Island Ice Tea',
        //     description: 'Cocktail made with vodka, tequila, light rum, triple sec, gin, and a splash of cola, which gives the drink the same hue as iced tea.',
        //     // image: LongIslandTea,
        //     options: [options[1]._id],
        //     price: 9.00,
        //     quantity: 1
        // },
        // {
        //     name: 'Suicide',
        //     description: 'A cup filled to the brim with every single soft drink available at a restaurants soda machine',
        //     // image: Suicide,
        //     options: [options[2]._id],
        //     price: 2.25,
        //     quantity: 1
        // },
        // {
        //     name: 'Ginger ale',
        //     description: 'A carbonated beverage made with ginger root and a sweetener.',
        //     // image: Gingerale,
        //     options: [options[2]._id],
        //     price: 3.50,
        //     quantity: 1
        // },
        // {
        //     name: 'virgin Mojito',
        //     description: 'A refreshing drink blend of mint and lemon flavours with no rum',
        //     // image: VMojito,
        //     options: [options[0]._id],
        //     price: 5.75,
        //     quantity: 1
        // },
        // {
        //     name: 'Lavender Lemonade',
        //     description: 'A lavender infused lemonade',
        //     image: 'client/public/Images/lavenderlemonade.jpg',
        //     // category: categories[1]._id,
        //     price: 4.25,
        //     quantity: 1
        // },
        // {
        //     name: 'zombie',
        //     description: 'A famous tropical rum cocktail. It is a tasty blend of rum and fruit juices.',
        //     image: 'client/public/Images/zombiecocktail.jpg',
        //     // category: categories[0]._id,
        //     price: 9.25,
        //     quantity: 1
        // },
        
      
      
    ]);

    console.log('drinks seeded');

    // await User.deleteMany();

    // await User.create({
    //     firstName: 'Pamela',
    //     lastName: 'Washington',
    //     email: 'pamela@testmail.com',
    //     password: 'password12345',
    //     orders: [
    //         {
    //             drinks: [drinks[0]._id, drinks[0]._id, drinks[1]._id]
    //         }
    //     ]
    // });

    // await User.create({
    //     firstName: 'Elijah',
    //     lastName: 'Holt',
    //     email: 'eholt@testmail.com',
    //     password: 'password12345'
    // });

    // console.log('users seeded');

    process.exit();
});