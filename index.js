const express = require('express')
const app = express()
const port = 8080


function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

app.get('/', async (req, res) => {
    await sleep(2000);
    res.send([
        {
            name: 'Coke',
            price: 20,
            image: 'assets/products/Coke.png',
            description: 'Coke',
        },
        {
            name: 'Coke (Bottle)',
            price: 20,
            image: 'assets/products/CokeBottle.png',
            description: 'Coke Bottle',
        },
        {
            name: 'Coke (Can)',
            price: 40,
            image: 'assets/products/CokeCan.png',
            description: 'Coke Can',
        },
        {
            name: 'Coke Zero',
            price: 20,
            image: 'assets/products/CokeZero.png',
            description: 'Coke Zero',
        },
        {
            name: 'Coke Zero (Bottle)',
            price: 20,
            image: 'assets/products/CokeZeroBottle.png',
            description: 'Coke Zero Bottle',
        },
        {
            name: 'Coke Zero (Can)',
            price: 40,
            image: 'assets/products/CokeZeroCan.png',
            description: 'Coke Zero Can',
        },
        {
            name: 'Fanta',
            price: 20,
            image: 'assets/products/Fanta.png',
            description: 'Fanta',
        },
        {
            name: 'Fanta (Bottle)',
            price: 20,
            image: 'assets/products/FantaBottle.png',
            description: 'Fanta Bottle',
        },
        {
            name: 'Fanta (Can)',
            price: 40,
            image: 'assets/products/FantaCan.png',
            description: 'Fanta Can',
        },
        {
            name: 'Pepsi',
            price: 20,
            image: 'assets/products/Pepsi.png',
            description: 'Pepsi',
        },
        {
            name: 'Pepsi (Bottle)',
            price: 20,
            image: 'assets/products/PepsiBottle.png',
            description: 'Pepsi Bottle',
        },
        {
            name: 'Pepsi (Can)',
            price: 40,
            image: 'assets/products/PepsiCan.png',
            description: 'Pepsi Can',
        },
        {
            name: 'Sprite',
            price: 20,
            image: 'assets/products/Sprite.png',
            description: 'Sprite',
        },
        {
            name: 'Sprite (Bottle)',
            price: 20,
            image: 'assets/products/SpriteBottle.png',
            description: 'Sprite Bottle',
        },
        {
            name: 'Sprite (Can)',
            price: 40,
            image: 'assets/products/SpriteCan.png',
            description: 'Sprite Can',
        },
        {
            name: 'Sprite (Can)',
            price: 40,
            image: 'assets/products/SpriteCan.png',
            description: 'Sprite Can',
        },
    ]
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
