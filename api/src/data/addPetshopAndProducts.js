const Petshop = require("../models/petshop");
const Product = require("../models/product");
const petshops = require("./petfood.json");
const createRecipients = require("../services/pagarme").createRecipient;

//database
require("../database");

const addPetshopAndProducts = async () => {
  try {
    for (let petshop of petshops) {
      const recipient = await createRecipients(petshop.nome);

      if (!recipient.error) {
        const newPetshop = await new Petshop({
          ...petshop,
          recipient_id: recipient.data.id,
        }).save();
        await Product.insertMany(
          petshop.produtos.map((p) => ({ ...p, petshop_id: newPetshop._id }))
        );
      } else {
        console.log(recipient.message);
      }
    }
    console.log("Final do Script");
  } catch (err) {
    console.log(err.message);
  }
};

addPetshopAndProducts();
