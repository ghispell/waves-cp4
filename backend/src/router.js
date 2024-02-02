const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
/* const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.post("/items", itemControllers.add); */

const userControllers = require("./controllers/userControllers");
const { hashPassword, verifyPassword } = require("./services/hashPassword");

router.get("/users", userControllers.browse);
router.get("/users/sessions/:id", userControllers.readSession);
router.get("/users/:id", userControllers.read);
router.post("/users", hashPassword, userControllers.add);
router.post("/login", verifyPassword, userControllers.login);
router.get("/logout", userControllers.logout);

const sessionControllers = require("./controllers/sessionControllers");

router.post("/sessions/:id", sessionControllers.add);
router.get("/sessions", sessionControllers.browse);
router.get("/sessions/:id", sessionControllers.read);
router.put("/sessions", sessionControllers.edit);

const sessionParticipationControllers = require("./controllers/sessionParticipationControllers");

router.get("/sessionsparticipation/", sessionParticipationControllers.browse);
router.post(
  "/sessionsparticipation/:id",
  sessionParticipationControllers.registrationSession
);
/* ************************************************************************* */

module.exports = router;
