const jsonServer = require('json-server')
const auth = require('json-server-auth')
const router = jsonServer.router('db.json')
const app = jsonServer.create()

const rules = auth.rewriter({
  // Permission rules
  users: 600, // User must own the resource to write or read the resource.
  comments: 644, // 
  products: 444, // No one can write the resource. Everyone can read the resource.
  // Other rules
  "/api/*": "/$1" // /api/products # → /products 
  // "/:resource/:id/show": "/:resource/:id", // /products/1/show # → /products/1 or any another names
  // '/products/:id': '/products?_page=:id', // /posts/1 # → /posts?_page=1
  // "/digit\\?id=:id": "/products/:id" // /digit?id=1 # → /products/1 
})
 
// You must apply the middlewares in the following order
app.use(rules)
app.use(auth)
app.use(router)
app.listen(3000)