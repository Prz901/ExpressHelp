# Express fe não aloprando

### Doctor end-point

#### Get doctor

Request:

```
GET - ip/medico/:id
```

Expected response:

```
{
    nome: "doutor luis",
    id: 15,
    crm: 1323123
}
```

#### Create doctor

Request:

```
POST - id/medico

header:
    {x-token:1231231312312}

body:{
    nome: "doutor luis",
    id: 15,
    crm: 1323123
}
```

Expected response

```
Success
```
