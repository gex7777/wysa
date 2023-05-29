# WYSA SLEEP RESTAPI DOCS

Where full URLs are provided in responses they will be rendered as if service
is running on 'http://testserver/'.

## Open Endpoints

Open endpoints require no Authentication.

- [Signup](signup.md) : `POST /api/signup/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### Form Flow related

Each endpoint displays information related to the User whose
Token is provided with the request:

- [First Flow data](Form/get.md) : `GET /api/form/`
- [Get Next Flow data](Form/post.md) : `POST /api/form/`

## NOSQL Models

For a User

```c
{
    id:"document_id",
  nickname: {
        type: String,
        unique: true,
        required: true
    },
    form_answers:[
        {step:{
             type: number,
        unique: true,
        required: true
        },
        question:{
                 type: string,
        unique: true,
        required: true
        }.
        answers:[{option_number:{
             type: number,
        unique: true,
        required: true
        },
        option:{
                      type: string,
        unique: true,
        required: true
        }}]
        }
    ]
}
```

For a Form FLow Entity

```c
{
    id:"document_id",
  step: {
        type: number,
        unique: true,
        required: true
    },
     title: {
        type: string,
        unique: true,
        required: true
    },
     subQuestion: {
        type: number,
        unique: true,
        required: true
    },
    options:[{
        number:{
                type: number,
        unique: true,
        required: true
        },
        option:{
                 type: string,
        unique: true,
        required: true
        }
}]
}
```
