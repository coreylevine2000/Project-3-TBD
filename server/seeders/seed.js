const db = require('../config/connection');
const { User, Drink, Options } = require('../models');


db.once('open', async () => {
  try {
    await Options.deleteMany();

    const options = Options.insertMany([
      { name: 'Liquor' },
      { name: 'Beer' },
      { name: 'NonAlcoholic' },
    ])

    await Drink.deleteMany();

    const drinks = await Drink.insertMany([
      {
        name: "Margarita",
        description: "A classic lime cocktail with lime juice, tequila and agave syrup.",
        image: '../../client/src/images/margarita.jpg',
        option: options[0]._id,
        price: 7.50,
        quantity: 1
    },
    {
        name: 'Old Fashion',
        description: 'Oldy but goldy drink Traditionally made with bourbon or rye whiskey, lightly sweetened with sugar and aromatised with bitters.',
        image: '../../client/src/images/oldfashion.jpg',
        category: options[0]._id,
        price: 9.50,
        quantity: 1
    },
    {
        name: 'Martini',
        description: 'a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist.',
        image: 'client/public/Images/martini.jpg',
        // category: options[0]._id,
        price: 8.75,
        quantity: 1
    },
    {
        name: 'Long Island Ice Tea',
        description: 'Cocktail made with vodka, tequila, light rum, triple sec, gin, and a splash of cola, which gives the drink the same hue as iced tea.',
        image: 'client/public/Images/longislandicetea.jpg',
        // category: options[0]._id,
        price: 9.00,
        quantity: 1
    },
    {
        name: 'Sherly Temple',
        description: 'Sweet lemon or lime soda with a sweet-tart like cherry flavor from grenadine, similar to an Italian Soda.',
        image: 'client/public/Images/shirleytemple.jpg',
        // category: options[1]._id,
        price: 2.25,
        quantity: 1
    },
    {
        name: 'Suicide',
        description: 'A cup filled to the brim with every single soft drink available at a restaurants soda machine',
        image: 'client/public/Images/suicidenoalcohol.jpg',
        // category: options[1]._id,
        price: 2.25,
        quantity: 1
    },
    {
        name: 'Ginger ale',
        description: 'A carbonated beverage made with ginger root and a sweetener.',
        image: 'client/public/Images/gingerale.jpg',
        // category: options[1]._id,
        price: 3.50,
        quantity: 1
    },
    {
        name: 'virgin Mojito',
        description: 'A refreshing drink blend of mint and lemon flavours with no rum',
        image: 'client/public/Images/viginmojito.jpg',
        // category: options[1]._id,
        price: 5.75,
        quantity: 1
    },
    {
        name: 'Lavender Lemonade',
        description: 'A lavender infused lemonade',
        image: 'client/public/Images/lavenderlemonade.jpg',
        // category: options[1]._id,
        price: 4.25,
        quantity: 1
    },
    {
        name: 'zombie',
        description: 'A famous tropical rum cocktail. It is a tasty blend of rum and fruit juices.',
        image: 'client/public/Images/zombiecocktail.jpg',
        // category: options[0]._id,
        price: 9.25,
        quantity: 1
    }
    ]);

    console.log('drinks seeded successfully');

    await User.deleteMany();

    await User.create({
      firstName: 'Joe',
      lastName: 'Blow',
      email: 'JoeBlow@test.com',
      password: 'Test12345',
      orders: [
        {
          drinks: [drinks[2]._id, drinks[1]._id]
        }
      ]
    });

    await User.create({
        firstName: 'David',
        lastName: 'Thomas',
        username: "DavidT",
        email: "dthomas@techfriends.dev",
        password: "password08"
      
    })

    
    // await Drink.deleteMany({});
    // await User.deleteMany({});

    // await User.create(userSeeds);

    // const drinks = await Drink.insertMany(drinkSeeds)

    // for (let i = 0; i < drinkSeeds.length; i++) {
    //   const { _id, customer } = await Drink.create(drinkSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: customer },
    //     {
    //       $addToSet: {
    //         drinks: _id,
    //       },
    //     }
    //   );
    // }
  } 
  catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});