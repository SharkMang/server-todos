const isAuthenticated = (ctx) => (console.log(1));

const  getUserByUsername = (username, users) => {
  let user;
  for (let i = 0; i < users.length; i++) {
    user = users[i];
    if (user.username === username) {
      return user;
    }
  }
  return null;
}

module.exports = {
  getUserByUsername,
  isAuthenticated
}