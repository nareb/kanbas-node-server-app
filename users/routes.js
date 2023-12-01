import * as dao from "./dao.js";
let currentUser = null;
function UserRoutes(app) {
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers()
        res.json(users);
   };
  const findUserById = async (req, res) => {
    const userId = req.params.userId;
    const user = await dao.findUserById(userId);
    res.json(user);
   };

    const findUserByUsername = async (req, res) => {
        const username = req.params.username;
        const user = await dao.findUserByUsername(username);
        res.json(user);
    };

    const findUserByCredentials = async (req, res) => {
        const {username, password} = req.params;
        const user = await dao.findUserByCredentials(username, password);
        res.json(user);
    };
  const updateUser = async (req, res) => { };
  const signup = async (req, res) => { };
  const signin = async (req, res) => { 
    const { username, password } = req.body;
    currentUser = await dao.findUserByCredentials(username, password);
    res.json(currentUser);
  };
  const signout = (req, res) => { };
  const account = async (req, res) => { };
  
  const findUsersByRole = async (req, res) => {
    const role = req.params.role;
    const users = await dao.findUsersByRole(role);
    res.json(users);
  };

  const createUser = async (req, res) => {
    const {username, password, email, role} = req.params;
    const user = await dao.createUser({
        username,
        password,
        email,
        role,
    });
    res.json(user);
   };

    const updateFirstName = async (req, res) => {
    const id = req.params.id;
    const newFirstName = req.params.newFirstName;
    const status = await dao.updateUser(id, { firstName: newFirstName});
    res.json(status);
   };

   const deleteUser = async (req, res) => {
    const id = req.params.id;
    const status = await dao.deleteUser(id);
    res.json(status);
    };

  app.get("/api/users/delete/:id", deleteUser);
  app.get("/api/users/updateFirstName/:id/:newFirstName", updateFirstName);
  app.get("/api/users/:username/:password/:email/:role", createUser);
  app.post("/api/users", createUser);
  app.get("/api/users/role/:role", findUsersByRole);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.get("/api/users/username/:username", findUserByUsername)
  app.get("/api/users/credentials/:username/:password", findUserByCredentials)
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);
}
export default UserRoutes;