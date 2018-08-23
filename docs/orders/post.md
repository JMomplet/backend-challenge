# Create an order

Create an order with a list of phones and the data of the buyer.

**URL** : `/orders/`

**Method** : `POST`

**Data example** All fields must be sent.

```json
{
	"name":"Jorge",
	"surname":"Momplet Narejos",
	"email":"test@mail.com",
	"phones":["5b7e7a0095132306f7172f67","5b7e7a0095132306f7172f68"]
}
```

## Success Response

**Condition** : If every field is present and the phone list isn't empty.

**Code** : `200 OK`

**Content example**

```json
{
    "name": "Jorge",
    "surname": "Momplet Narejos",
    "email": "jorgemomplet@gmail.com",
    "phones": [
        "5b7e7a0095132306f7172f67",
        "5b7e7a0095132306f7172f68"
    ],
    "totalPrice": 988
}
```

## Error Responses

**Condition** : If any field is missing.

**Code** : `400 BAD REQUEST`

**Content**
```json
{
    "message": "You need to specify a name, surname and email for the order to be valid"
}
```

### Or

**Condition** : If the phone list is empty.

**Code** : `400 BAD REQUEST`

**Content**

```json
{
    "message": "The phone list is empty"
}
```
### Or

**Condition** : If the phone doesn't contain any valid phone.

**Code** : `400 BAD REQUEST`

**Content**

```json
{
    "message": "The request didn't contain any valid phone"
}
```