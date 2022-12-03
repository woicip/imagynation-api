<a id="home"></a>
# 🧩 Imagy API
A REST API for developers prototyping their real application using data they need with Imagy API that I made. Helping developers building their application.

<br/>

<a id="available-data"></a>
## Available Data
- [User](#user)
    - [Get Single User](#get-single-user)
    - [Get All User](#get-all-user)
    - [Get Selected User](#get-selected-user)
- [Anime](#anime) (Available Soon)
- [Beach](#beach) (Available Soon)

<br/>

<a id="installation-and-update"></a>
## User

**Data Schema**

```typescript
{
    id: number,
    name: string,
    email: string,
    phone: string,
    avatar: string
}
```

## 

<a id="get-single-user"></a>
### 01. Get Single User

This will pick random user for you everytime you hit the endpoint.

```
GET | https://domain.com/user
```

**JSON Response**
```json
{
    "id": 5,
    "name": "Josh Arthur",
    "email": "arthur.josh@mail.com",
    "phone": "+1 (934) 759-2524",
    "avatar": "https://a.pomf.cat/vsglja.jpg"
}
```

## 

<a id="get-all-user"></a>
### 02. Get All User

```
GET | https://domain.com/users
```

**JSON Response**

```json
[
    {   
        "id": 1,
        "name": "Alex Basherman",
        "email": "alex.basherman@email.com",
        "phone": "+1 (733) 991-3371",
        a"vatar": "https://a.pomf.cat/ykbrtu.jpg"
    },
    {
        "id": 2,
        "name": "Founche Daman",
        "email": "founcheDaman12@mail.com",
        "phone": "+1 (968) 558-4041",
        "avatar": "https://a.pomf.cat/uskdjm.jpg"
    },
    {
        "id": 3,
        "name": "George A. William",
        "email": "georgeawilliam@mail.com",
        "phone": "+1 (626) 830-3705",
        "avatar": "https://a.pomf.cat/dfyjjj.jpg"
    },
    { ... }, { ... }, { ... }
]
```

## 

<a id="get-selected-user"></a>
### 03. Get Selected User

```
GET | https://domain.com/user/5
```

**JSON Response**

```JSON
{
    "id": 5,
    "name": "Josh Arthur",
    "email": "arthur.josh@mail.com",
    "phone": "+1 (934) 759-2524",
    "avatar": "https://a.pomf.cat/vsglja.jpg"
}
```
<br/>
