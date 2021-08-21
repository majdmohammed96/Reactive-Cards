const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const db = new Database("./src/dataBase.db");

// Digo al servidor: mi motor de plantillas es este.
const server = express();
server.set("view engine", "ejs");

const userCards = []; //

server.use(cors());
server.use(express.json({ limit: "50mb" }));

const serverPort = process.env.PORT || 4000;
// STATIC SERVER: listen files in public folder
const staticServerPath = "./public"; // relative to the root of the project
server.use(express.static(staticServerPath));

server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.post("/card", (req, res) => {
  let response = {};
  console.log(req.body);
  if (
    req.body.palette === "" ||
    req.body.name === "" ||
    req.body.job === "" ||
    req.body.email === "" ||
    req.body.photo === "" ||
    req.body.github === "" ||
    req.body.linkedin === "" ||
    req.body.phone === ""
  ) {
    //mensaje de error
    response = {
      success: false,
      error: "Debe rellenar todos los campos",
    };
    console.log(res.json(response));
    //devolvemos la respuesta
    res.json(response);
  } else {
    const query = db.prepare(
      `INSERT INTO cards (palette, name, job, email, photo, phone, linkedin, github) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    );
    const result = query.run(
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.email,
      req.body.photo,
      req.body.phone,
      req.body.linkedin,
      req.body.github
    );

    if (req.hostname === "localhost") {
      success: true,
        (response = {
          cardURL: "http://localhost:4000/card/" + result.lastInsertRowid,
        });
    } else {
      response = {
        success: true,
        cardURL:
          "https://awesome-cards-profile-team-8.herokuapp.com/card/" +
          result.lastInsertRowid,
      }; //enlace de la url que se crea,
    }

    //devolvemos la respuesta
    res.json(response);
  }
});
// Mostrar tarjeta
server.get("/card/:cardId", (req, res) => {
  const query = db.prepare(`SELECT * FROM cards WHERE id = ?`);
  const foundCard = query.get(req.params.cardId);

  if (foundCard === undefined) {
    res.send("No encontrado");
  } else {
    console.log(foundCard);
    res.render("pages/card", foundCard); // <%= name %>
  }
});
