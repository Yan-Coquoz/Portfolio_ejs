const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainContoller");

router.get("/", mainController.home);
router.get("/projets", mainController.allProjets);
router.get("/projet/:type", mainController.projet);
router.get("/presentation", mainController.presentation);
router.get("/production", mainController.production);

module.exports = router;
