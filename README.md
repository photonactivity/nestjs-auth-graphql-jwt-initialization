# 服务器端
# 客户端 https://github.com/photonactivity/angular-auth-graphql-jwt-initialization
# graphQL
- 新建用户
```
mutation{
  createUser(createUserInput:{
    useremail:"12345678@12345678.com"
    username:"12345678"
    password:"12345678"
    profileImageUrl:"https://images.unsplash.com/photo-1641993685499-4b5a5a55fc71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
  })
  {
    username
    useremail
    password
    profileImageUrl
  }
}
```
- 查找所有用户
```
query{
  users{
    _id
    username
    useremail
    profileImageUrl
  }
}
```
- 查找用户
```
query{
  user(id:"61defc12917524f00f21a997"){
    username
    useremail
    password
    profileImageUrl
  }
}
```
- 删除用户
```
mutation{
  removeUser(id:"61defb3cfe293055efeee0b9"){
    _id
  }
}
```
