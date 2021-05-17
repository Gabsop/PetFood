const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product = new Schema({
  petshop_id: {
    type: Schema.Types.ObjectId,
    ref: "Petshop",
  },
  nome: String,
  capa: String,
  preco: Number,
  avaliacoes: Number,
});

module.exports = mongoose.model("Product", product);
