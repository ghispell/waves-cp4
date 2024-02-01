// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const sessions = await tables.session.readAll();

    // Respond with the items in JSON format
    res.json(sessions);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const session = await tables.session.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (session == null) {
      res.sendStatus(404);
    } else {
      res.json(session);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the item data from the request body
  const session = req.body;

  try {
    const changedRows = await tables.session.update(session);

    if (changedRows === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ changedRows });
    }
  } catch (err) {
    next(err);
  }
};

// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const session = req.body;
  const userId = req.params.id;

  try {
    // Insert the item into the database
    const insertId = await tables.session.create(session, userId);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  // destroy,
};
