# Phone App
## Initialization
Required:
- docker.io
- docker-compose
- [mongodb-org-tools](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

To start the services, move to the project root, then execute:
 
`docker-compose up`

Once the containers are running, the first time we'll need to restore the data:
 
`mongorestore --archive=./phoneapp.archive`

## API Endpoints
* [Get phone list](./docs/phones/get.md) : `GET /phones`
* [Create an order](./docs/orders/post.md) : `POST /orders`


## Docker ##
The app uses 2 containers (through docker-compose):
- **app**: This will be the container running the API server.
- **mongo**: This container has only MongoDB.

## Testing
### Tests with Chai
The app depends on the mongo docker, so to simplify the steps to get the tests running, first of all we'll run:
 
`docker-compose up`

Once the server is running, we need to attach to the app docker to run the tests from there:

`docker exec -it app bash`

Then you'll be able to execute the battery of tests directly from that directory:

`npm test`

### Manual tests with Postman
Once the server is running, it will be listening on `127.0.0.1:3000`, so you can use the examples used in the
documentation of each endpoint to test them using Postman.

## Questions
### How would you improve the system?

### How would you avoid your order API to be overflow?