const natureza = "Doméstica";
const empresa = "LATAM AIRLINES BRASIL";
const totalVoosDomesticos = db.voos.find({ natureza, "empresa.nome": empresa }).count();

db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos,
});

db.resumoVoos.findOne({ empresa }, { _id: 0 });
