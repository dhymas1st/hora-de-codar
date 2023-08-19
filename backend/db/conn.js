const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://edsouzajs:fonMCYDNWS6Cnqc7@cluster0.n9eigvd.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Conectado ao banco");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
