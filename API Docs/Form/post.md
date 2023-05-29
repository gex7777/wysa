# Get next flow entity

Get details of the next flow entity

**URL** : `/api/form/`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data constraints**

Provide current step in frontend

```json
{
  "step": "[number]"
}
```

**Data example** All fields must be sent.

```json
{
  "step": "1"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200 OK`

**Content example**

```json
{
  "step": "2",
  "title": "Let's say in a few weeks, you're sleeping well. What would change",
  "subQuestion": "Select all the changes you would like to see",
  "options": [
    { "number": 1, "option": "I would go to sleep easily" },
    { "number": 2, "option": "I would sleep through the night" },
    { "number": 3, "option": "I'd wake up on time, refreshed" }
  ]
}
```

## Error Responses

**Condition** : If something went wrong.

**Code** : `500 SERVER ERROR`

**Content** : `{}`

### Or

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
  "step": ["This field is required."]
}
```
