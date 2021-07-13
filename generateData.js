const faker = require('faker');

const database = { 
  products: [],
  comments: [],
  users: []
};

const n = 100;

for (let i=1; i<=n; i++) {
  database.products.push({
    id: i,
    title: faker.commerce.productName(),
    image: faker.image.food(),
    description: faker.commerce.productDescription(),
  });
  for (let j=1; j<=3; j++) {
    database.comments.push({
      id: i,
      userId: Math.ceil(Math.random()*n),
      productId: Math.ceil(Math.random()*n),
      text: faker.random.words(),
      rate: Math.ceil(Math.random()*10)/2,
    });
  }
  database.users.push({
    id: i,
    username: faker.name.findName(),
    password: faker.internet.password()
  });
}

console.log(JSON.stringify(database, undefined, 2));