import express from 'express';

const app = express();

app.use(express.json());

let frutas = [
  "Banana",
  "Maçã",
  "Laranja",
  "Manga"
];

app.get ("/fruta", (req, res) => { 
  res.send(frutas);
});

app.post("/fruta", (req, res) => { 
  const novaFruta = req.body.nome;
  frutas.push(novaFruta);
  res.send(`Fruta ${novaFruta} adicionada com sucesso!`);
}); 

app.put("/fruta/:posicao",(req,res) =>{ 
  frutas[req.params.posicao] = req.body.nome;
  res.send(`Atualização realizada com sucesso!`);
});

app.delete("/fruta/:posicao", (req,res) =>{ 
  const frutaRemovida = frutas.splice(req.params.posicao, 1);
  res.send(`Fruta ${frutaRemovida} removida com sucesso!`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
