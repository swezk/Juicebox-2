const {
  client,
  getAllUsers,
  createUser
} = require('./index'); 

// supply the db name and location of the database
const client = new client('postgres://localhost:5432/juicebox-dev');

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT id, username 
    FROM users;
  `);

  return rows;
}

async function createUser({ username, password }) {
  try {
    const { rows } = await client.query(
    `SELECT id, username 
    FROM users;
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}

// later
export default {
    client,
    getAllUsers,
    createUser
  }