# starter-nodejs-typescript-rest-api

## 環境構築

```sh
# 環境ファイルの作成
cp .env.template .env

# パッケージのインストール
npm install

# ローカル環境の立ち上げ
npm run dev
```

## 動作確認

Get all items

```sh
curl http://localhost:7000/api/menu/items -i
```

Get an item

```sh
curl http://localhost:7000/api/menu/items/2 -i
```

Add an item

```sh
curl -X POST -H 'Content-Type: application/json' -d '{
"name": "Salad",
"price": 499,
"description": "Fresh"
}' http://localhost:7000/api/menu/items -i

curl http://localhost:7000/api/menu/items/ -i
```

Update an item

```sh
curl -X PUT -H 'Content-Type: application/json' -d '{
"name": "Spicy Pizza",
"price": 599,
"description": "Blazing Good",
}' http://localhost:7000/api/menu/items/2 -i

curl http://localhost:7000/api/menu/items/2 -i
```

Delete an item

```sh
curl -X DELETE http://localhost:7000/api/menu/items/2 -i

curl http://localhost:7000/api/menu/items/ -i
```
