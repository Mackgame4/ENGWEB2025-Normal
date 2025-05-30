# Persistência de Dados com Docker

# Setup
```sh
$ docker run -d --name mongoEW -p 27017:27017 mongo
$ docker start mongoEW
cd enunciado
docker cp output_dataset.json mongoEW:/tmp
$ docker exec -it mongoEW sh
mongoimport -d eurovisao -c edicoes /tmp/output_dataset.json --jsonArray
# Testar a importação
$ mongosh
show dbs
> use eurovisao
> show collections
> db.edicoes.find().pretty()
```

# Queries
Ver ficheiro `queries.md` para as queries que devem ser implementadas.

# How to Run
```sh
$ cd ex1
$ npm i
$ npm start
```