## Projeto DataFlights!!

### Habilidades

- Buscar documentos no banco
- Usar filtros na busca
- Deletar documentos conforme filtro
- Contar documentos compreendidos nos filtros pedidos
- Inserir documentos no banco

---

Projeto com o codinome _dataflights_. Neste projeto, eu pratiquei alguns conceitos de **MongoDB**.

---

### Requisitos do projeto

#### 1 - Retorne a quantidade de documentos inseridos na coleção `voos`.
~~~javascript
  db.voos.find().count();
~~~

#### 2 - Retorne os 10 primeiros documentos com voos da empresa `AZUL`.
~~~javascript
  db.voos.find({ "empresa.nome": "AZUL" }).limit(10);
~~~

#### 3 - Retorne a quantidade de voos da empresa `AZUL`.
~~~javascript
  db.voos.find({ "empresa.nome": "AZUL" }).count();
~~~

#### 4 - Retorne a quantidade de voos da empresa `GOL`.
~~~javascript
  db.voos.find({ "empresa.nome": "GOL" }).count();
~~~

#### 5 - Retorne o `vooId` do décimo ao décimo segundo documento da coleção `voos`.
~~~javascript
  db.voos.find({}, { vooId: 1, _id: 0 }).skip(9).limit(3);
~~~

#### 6 - Retorne apenas os campos `empresa.sigla`, `empresa.nome` e `passageiros` do voo com o campo `vooId` igual a `756807`.
~~~javascript
  db.voos.find({ vooId: 756807 }, { "empresa.sigla": 1, "empresa.nome": 1, passageiros: 1, _id: 0 });
~~~

#### 7 - Retorne a quantidade de voos em que o ano seja menor do que `2017`.
~~~javascript
  db.voos.find({ ano: { $lt: 2017 } }).count();
~~~

#### 8 - Retorne a quantidade de voos em que o ano seja maior do que `2016`.
~~~javascript
  db.voos.find({ ano: { $gt: 2016 } }).count();
~~~

#### 9 - Retorne a quantidade de voos entre os anos de `2017` e `2018`.
~~~javascript
  db.voos.find({ ano: { $gte: 2017, $lte: 2018 } }).count();
~~~

#### 10 - Retorne apenas os **10** primeiros documentos com voos da empresa `GOL` do ano de `2017`. Exiba apenas os campos `vooId`, `empresa.nome`, `aeroportoOrigem.nome`, `aeroportoDestino.nome`, `mes` e `ano`.
~~~javascript
  db.voos.find(
    { "empresa.nome": "GOL", ano: 2017 }, 
    { vooId: 1,
  "empresa.nome": 1,
  "aeroportoOrigem.nome": 1,
  "aeroportoDestino.nome": 1,
    mes: 1,
  ano: 1,
  _id: 0 },
    ).limit(10);
~~~

#### 11 - Retorne a quantidade de documentos em que o campo `aeroportoDestino.pais` não seja igual a `ESTADOS UNIDOS`.
~~~javascript
  db.voos.find({ "aeroportoDestino.pais": { $ne: "ESTADOS UNIDOS" } }).count();
~~~

#### 12 - Retorne a quantidade de documentos em que o campo `aeroportoDestino.pais` seja igual a `BRASIL`, `ARGENTINA` ou `CHILE`.
~~~javascript
  db.voos.find({ "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] } }).count();
~~~

#### 13 - Retorne a quantidade de documentos em que o campo `aeroportoDestino.continente` não seja igual a `EUROPA`, `ÁSIA` e `OCEANIA`.
~~~javascript
  db.voos.find({ "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } }).count();
~~~

#### 14 - Retorne o total de voos em que o país de origem não seja `BRASIL`.
~~~javascript
  db.voos.find({ "aeroportoOrigem.pais": { $ne: "BRASIL" } }).count();
~~~

#### 15 - Retorne o total de voos com mais de 20 `decolagens`.
~~~javascript
  db.voos.find({ decolagens: { $gt: 20 } }).count();
~~~

#### 16 - Retorne o total de voos em que o campo `natureza` possui o valor `Internacional`.
~~~javascript
  db.voos.find({ natureza: "Internacional" }).count();
~~~

#### 17 - Retorne o total de voos em que o campo `natureza` possui o valor `Doméstica`.
~~~javascript
  db.voos.find({ natureza: "Doméstica" }).count();
~~~

#### 18 - Retorne o `vooId`, `mes` e `ano` do primeiro voo com mais de `7000` passageiros pagos.
~~~javascript
  db.voos.findOne({ "passageiros.pagos": { $gt: 7000 } }, { vooId: 1, mes: 1, ano: 1, _id: 0 });
~~~

#### 19 - Retorne o `vooId` do primeiro voo em que o campo `litrosCombustivel` exista.
~~~javascript
  db.voos.findOne({ litrosCombustivel: { $exists: true } }, { vooId: 1, _id: 0 });
~~~

#### 20 - Retorne o `vooId` do primeiro voo em que o campo `rtk` não exista.
~~~javascript
  db.voos.findOne({ rtk: { $exists: false } }, { vooId: 1, _id: 0 });
~~~

#### 21 - Retorne o `vooId` do primeiro voo em que o campo `litrosCombustivel` seja maior ou igual a `1000`.
~~~javascript
  db.voos.findOne({ litrosCombustivel: { $gte: 1000 } }, { vooId: 1, _id: 0 });
~~~

#### 22 - Retorne o `vooId` do primeiro voo em que a empresa seja `DELTA AIRLINES` ou `AMERICAN AIRLINES`, a sigla do aeroporto de origem seja `SBGR` e a sigla do aeroporto de destino seja `KJFK`.
~~~javascript
  db.voos.findOne(
    {
      $and: [
        { $or: [{ "empresa.nome": "DELTA AIRLINES" }, { "empresa.nome": "AMERICAN AIRLINES" }] },
        { "aeroportoOrigem.sigla": "SBGR" },
        { "aeroportoDestino.sigla": "KJFK" },
      ],
    },
    { vooId: 1, _id: 0 },
  );
~~~

#### 23 - Retorne o `vooId` e `litrosCombustivel` do primeiro voo em que o campo `litrosCombustivel` **não seja maior do que** `1000` e o campo `litrosCombustivel` exista.
~~~javascript
  db.voos.findOne(
    {
      $and: [
        { litrosCombustivel: { $not: { $gt: 1000 } } },
        { litrosCombustivel: { $exists: true } },
      ],
    },
    { vooId: 1, litrosCombustivel: 1, _id: 0 },
  );
~~~

#### 24 - Retorne o `vooId`, `empresa.nome` e `litrosCombustivel` do primeiro voo em que `litrosCombustivel` **não seja maior do que** `600` **e** a empresa **não seja** `GOL` **ou** `AZUL`, **e** o campo `litrosCombustivel` exista.
~~~javascript
  db.voos.findOne(
    {
      $and: [
        { litrosCombustivel: { $not: { $gt: 600 } } },
        { "empresa.nome": { $nin: ["GOL", "Azul"] } },
        { litrosCombustivel: { $exists: true } },
      ],
    },
    { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 },
  );
~~~

#### 25 - Remova todos os voos da empresa `AZUL` em que a quantidade de combustível seja menor do que `400`. Informe a quantidade de documentos removidos.
~~~javascript
  db.voos.deleteMany(
    {
    "empresa.nome": "AZUL",
    litrosCombustivel: { $lt: 400 },
    },
  );
~~~

#### 26 - Remova todos os voos da empresa `GOL` em que a quantidade de passageiros pagos esteja entre `5` e `10`, incluindo os casos em que a quantidade é `5` e `10`. Informe a quantidade de documentos removidos.
~~~javascript
  db.voos.deleteMany(
    {
    "empresa.nome": "GOL",
    "passageiros.pagos": { $gte: 5, $lte: 10 },
    },
  );
~~~

#### 27 - Retorne a quantidade total de voos de natureza `Doméstica` que a empresa `PASSAREDO` possui, via uso de uma nova coleção chamada `resumoVoos`.
~~~javascript
  const nat = "Doméstica";
  const emp = "PASSAREDO";
  const qnt = db.voos.find({ natureza: nat, "empresa.nome": emp }).count();

  db.resumoVoos.insertOne({
    empresa: emp,
    totalVoosDomesticos: qnt,
  });

  db.resumoVoos.findOne({ empresa: emp }, { _id: 0 });
~~~

#### 28 - Retorne a quantidade total de voos de natureza `Doméstica` que a empresa `LATAM AIRLINES BRASIL` possui, via uso de uma nova coleção chamada `resumoVoos`.
~~~javascript
  const natureza = "Doméstica";
  const empresa = "LATAM AIRLINES BRASIL";
  const totalVoosDomesticos = db.voos.find({ natureza, "empresa.nome": empresa }).count();

  db.resumoVoos.insertOne({
    empresa,
    totalVoosDomesticos,
  });

  db.resumoVoos.findOne({ empresa }, { _id: 0 });
~~~
