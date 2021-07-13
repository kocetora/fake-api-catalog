# Fake API for lightITtest

_Most of the information is taken from the [the site](https://www.techiediaries.com/fake-api-jwt-json-server/ "Techiediaries")._

## Data pagination
You can query paginated data from your API endpoint by adding a page parameter to your endpoint. For example:

`curl -X GET "http://localhost:3000/products?_page=1"`
This will send a GET request to read the first page.

## Filtering data
You can also add filters to get filtered data by simply appending the filters to your endpoint. For example:

`curl -X GET "http://localhost:3000/products?name=Product004&cost=30"`
& can be used to combine multiple filters.

## Sorting data
You can return sorted data from your endpoint by using _sort and _order parameters. For example:

`curl -X GET "http://localhost:3000/products?_sort=name&_order=DESC"`

_You can find more features by visiting [the documentation](https://github.com/typicode/json-server "json-server")._