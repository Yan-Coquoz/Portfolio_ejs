const datas = require("../data/datas.json");

exports.home = (req, res) => {
  // vu générale
  res.render("home", { datas });
};

exports.projet = (req, res) => {
  // rendre une route en perticulier sur UN projet
  const reponse = req.params.type;
  const typeTab = [];

  for (let i = 0; i < datas.length; i++) {
    if (datas[i].type == reponse) {
      typeTab.push(datas[i]);
    }
  }
  res.render("projet", { typeTab });
};

exports.presentation = (req, res) => {
  // une route sur aside
  res.render("aside");
};

exports.allProjets = (req, res) => {
  // rendre tous les projets

  res.render("projets", { datas });
};

exports.production = (req, res) => {
  res.render("production");
};
