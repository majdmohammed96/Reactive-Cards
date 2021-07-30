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

// API: listen fetch requests
// API request > GET > http://localhost:3000/users

// server.get('/users', (req, res) => {
//   const response = {
//     users: [{ name: 'So' }, { name: 'María' }],
//   };
//   res.json(response);
// });

/*
app.post('/users', (req, res) => {
  const query = db.prepare(`INSERT INTO users (email, password) VALUES (?, ?)`);
  const result = query.run('celia@gmail.com', 'fas09fn32');
  res.json(result);
});
*/

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
    // base de datos que devolverá cardID
    /*const cardId = 'id-' + Date.now();
    userCards.push({
      id: cardId,
      palette: req.body.palette,
      name: req.body.name,
      job: req.body.job,
      email: req.body.email,
      photo: req.body.photo,
      phone: req.body.phone,
      linkedin: req.body.linkedin,
      github: req.body.github,
    });*/

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
  //console.log(req.params.cardId);
  // const foundCard = userCards.find(
  //   (userCard) => userCard.id === req.params.cardId
  // );
  const query = db.prepare(`SELECT * FROM cards WHERE id = ?`);
  const foundCard = query.get(req.params.cardId);

  if (foundCard === undefined) {
    res.send("No encontrado");
  } else {
    console.log(foundCard);
    //res.json(foundCard);
    res.render("pages/card", foundCard); // <%= name %>
  }
});

// // API request > POST > http://localhost:3000/new-user
// server.post('/card', (req, res) => {
//   // console request body params
//   console.log(`Creating the user in database with user name: `);
//   const response = {
//     result: `User created:`,
//   };
//   res.json(response);
// });
