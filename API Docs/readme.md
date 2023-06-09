# WYSA SLEEP RESTAPI DOCS

## Open Endpoints

Open endpoints require no Authentication.

- [Signup](signup.md) : `POST /api/signup/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Signup view above.

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
        type: string,
        unique: true,
        required: true
        },
    form_answers:{
      type:array,
      unique:true,
      required:false,
      arrayItem:{step:{
            type: number,
            unique: true,
            required: true
        },
        question:{
            type: string,
            unique: true,
            required: true
        }.
        answers:{
            type:array,
            unique:true,
            required:false,
            arrayItem:{
            {option_number:{
              type: number,
              unique: true,
              required: true
              },
            option:{
              type: string,
              unique: true,
              required: true
              }
            }
            }
            }
            }
    }
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
        required: false
    },
    options:{
        type:array,
        unique:true,
        required:false,
        arrayItem:{
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
        }
}
}
```
