# Show First step of form flow

Get the details of the first flow entity

**URL** : `/api/form/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "step": "1",
  "title": "Let's say in a few weeks, you're sleeping well. What would change",
  "subQuestion": "Select all the changes you would like to see",
  "options": [
    { "number": 1, "option": "I would go to sleep easily" },
    { "number": 2, "option": "I would sleep through the night" },
    { "number": 3, "option": "I'd wake up on time, refreshed" }
  ]
}
```

## Notes

- The flow might not have `subQuestion` and `options`
