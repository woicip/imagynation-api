<a id="home"></a>
# 🧩 Imagynation API
A REST API for developers to prototyping their real application using data they need with Imagy API that I made. Helping developers building their application.

<br/>

<a id="available-data"></a>
## Available Data
- [User](#user)
    - [Get Single User](#get-single-user)
    - [Get All User](#get-all-user)
    - [Get Selected User](#get-selected-user)
- [Posts](#posts)
    - [Get Single Post](#get-single-post)
    - [Get All Posts](#get-all-posts)
    - [Get Selected Post](#get-selected-post)

<br/>

<a id="installation-and-update"></a>
## 👥 User

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
This endpoint will give you user's data from 1 to 10 in order

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
        "avatar": "https://a.pomf.cat/ykbrtu.jpg"
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
    }
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

<br/>

<a id="installation-and-update"></a>
## 🎍 Posts

**Data Schema**

```typescript
{
    id: number,
    fullname: string,
    username: string,
    text: string,
    likes: number, 
    comments: number,
    avatar: string,
    image_post: string, 
    posted_at: string
}
```

## 

<a id="get-single-post"></a>
### 01. Get Single Random Post

This will pick random post for you everytime you hit the endpoint.

```
GET | https://domain.com/random-post
```

**JSON Response**
```json
{
  "date": "2023-07-12T08:04:42.367Z",
  "user": {
    "id": 1,
    "fullname": "Benjamin Thompson",
    "username": "benthom22",
    "text": "Enjoying the little things in life: a beautiful sunset and a warm cup of tea.",
    "likes": 532467,
    "comments": 59,
    "avatar": "https://a.pomf.cat/ykbrtu.jpg",
    "image_post": "https://pomf2.lain.la/f/qc2ykdqa.png",
    "posted_at": "10 hours ago"
  }
}
```

## 

<a id="get-all-posts"></a>
### 02. Get All Posts
This endpoint will give you posts data from 1 to 10 in order

```
GET | https://domain.com/posts
```

**JSON Response**

```json
{
  "date": "2023-07-12T08:03:50.121Z",
  "posts": [
    {
      "id": 1,
      "fullname": "Benjamin Thompson",
      "username": "benthom22",
      "text": "Enjoying the little things in life: a beautiful sunset and a warm cup of tea.",
      "likes": 532467,
      "comments": 59,
      "avatar": "https://a.pomf.cat/ykbrtu.jpg",
      "image_post": "https://pomf2.lain.la/f/qc2ykdqa.png",
      "posted_at": "10 hours ago"
    },
    {
      "id": 2,
      "fullname": "Emily Wilson",
      "username": "emwilson89",
      "text": "Discovered an amazing book that I couldn't put down!",
      "likes": 245290,
      "comments": 106,
      "avatar": "https://a.pomf.cat/uskdjm.jpg",
      "image_post": "https://pomf2.lain.la/f/zlirgfx.png",
      "posted_at": "3 days ago"
    },
    {...},{...},{...}
  ]
}
```

## 

<a id="get-selected-post"></a>
### 03. Get Selected Post

```
GET | https://domain.com/post/10
```

**JSON Response**

```JSON
{
  "date": "2023-07-12T08:03:20.171Z",
  "user": {
    "id": 10,
    "fullname": "Mia Garcia",
    "username": "miagarc29",
    "text": "Reminiscing about cherished childhood memories.",
    "likes": 1056,
    "comments": 749,
    "avatar": "https://a.pomf.cat/ocxhyd.jpg",
    "image_post": "https://pomf2.lain.la/f/36suxl7a.jpg",
    "posted_at": "15 days ago"
  }
}
```
<br/>