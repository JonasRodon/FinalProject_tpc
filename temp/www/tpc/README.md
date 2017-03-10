Get all castles

```
curl localhost:3000/castles
curl -X "GET" localhost:3000/castles
```


Create castle

```
curl --data "title=Buy More Whiteboards" localhost:3000/castles
```

Get specific castle

```
curl localhost:3000/castle/58b6b9700fa85256b399c04c
```

Remove specific castle

```
curl -X "DELETE" localhost:3000/castle/58b6ae0f209bf3444a4d04fa
```

Update specific castle

```
curl -X "PUT" --data "title=Buy Gold and Silver&done=true"  localhost:3000/castle/58b6b817be054254dd6327ca
```