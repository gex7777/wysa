# Login

Used to collect a Token for a registered User.

**URL** : `/api/signup/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
  "nickname": "a unique name"
}
```

**Data example**

```json
{
  "nickname": "meradolanaaya"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
}
```

## Error Response

**Condition** : If 'nickname' already exists.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "non_field_errors": ["Unable to signup with this name , try another one"]
}
```
