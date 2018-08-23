process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

let phoneIds = [];

describe('Phones', () => {
    describe('GET /phones', () => {
        it('it should recover all the phones', (done) => {
            chai.request(server)
                .get("/phones")
                .end((err, res) => {
                    //We save these for the /orders test
                    phoneIds.push(res.body[0]._id);
                    phoneIds.push(res.body[1]._id);

                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});

describe('Orders', () => {
    describe('POST /orders', () => {
        it('it should post correctly an order', (done) => {
            let order = {
                "name": "Jorge",
                "surname": "Momplet",
                "email": "test@mail.com",
                "phones": phoneIds
            };

            chai.request(server)
                .post('/orders')
                .send(order)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('totalPrice');
                    done();
                });

        });
        it('it should give an error if some field is missing', (done) => {
            let order = {
                "name": "Jorge",
                "email": "test@mail.com",
                "phones": phoneIds
            };

            chai.request(server)
                .post('/orders')
                .send(order)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });

        });
        it('it should give an error if the phone list is empty', (done) => {
            let order = {
                "name": "Jorge",
                "email": "test@mail.com",
                "phones": []
            };

            chai.request(server)
                .post('/orders')
                .send(order)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });

        });
    });
});