const jwt = require("jsonwebtoken");
const JWT_SECRET = "Iamaintelligentprogramme$r";

const fetchuser = (req, res, next) => {
  // Get the User form the JWT Token and add ID to the req object
  const token = req.header("authToken");
  if (!token) {
   return res.status(401).send({ error: "Please Authenticate with correct Token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
   }
   catch (error) {
    res.status(401).send({ error: "Please Authenticate with correct Token" });
  }
};

module.exports = fetchuser;
