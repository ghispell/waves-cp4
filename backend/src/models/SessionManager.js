const AbstractManager = require("./AbstractManager");

class SessionManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "session" });
  }

  // The C of CRUD - Create operation

  async create(session, userId) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, date, time, location, surf_level, userId) values (?, ?, ?, ?, ?, ?)`,
      [
        session.title,
        session.date,
        session.time,
        session.location,
        session.surf_level,
        userId,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(session) {
    const [result] = await this.database.query(
      `update ${this.table} set title = ?, date = ?, time = ?, location = ?, surf_level = ? where id = ?`,
      [
        session.title,
        session.date,
        session.time,
        session.location,
        session.surf_level,
        session.id,
      ]
    );

    return result.changedRows;
  }

  
  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = SessionManager;
