import axios from "axios";

const user = {
  id: "627558b5bb5f0eb99b21644e",
  name: "Fabio Longo de Moura",
  email: "fabio@moura.com",
  password: "senhadofabio",
};

const login = {
  email: "fabio@moura.com",
  password: "senhadofabio",
};

const fakeKisk = {
  title: "Jest testing",
  content: "jest testing",
  author: user,
  authorName: "JEST",
  isArticle: false,
};

const baseUrl = "http://localhost:8087";
test("Server open", async () => {
  return await axios.get(`${baseUrl}/`).then((response) => {
    expect(response.status).toBe(200);
  });
});

test("Get user", async () => {
  return await axios.get(`${baseUrl}/user/${user.id}`).then((response) => {
    expect(response.status).toBe(200);
  });
});

test("Get kisks", async () => {
  return await axios.get(`${baseUrl}/kisks`).then((response) => {
    expect(response.status).toBe(200);
  });
});

test("Search", async () => {
  return await axios
    .post(`${baseUrl}/search/${"teste"}`, {})
    .then((response) => {
      expect(response.status).toBe(200);
    });
});

test("Login (sucess)", async () => {
  return await axios.post(`${baseUrl}/login/`, login).then((response) => {
    expect(response.status).toBe(200);
  });
});

test("Login (fail)", async () => {
  return await axios
    .post(`${baseUrl}/login/`, {
      email: "fabio@moura.com",
      password: "senhaerrada",
    })
    .catch((error) => {
      expect(error.response.status).toBe(401);
    });
});

test("Create kisk", async () => {
  // It's true for debug, it will create an post and delete it;
  return await axios
    .post(`${baseUrl}/createKisk/true`, fakeKisk)
    .then((response) => {
      expect(response.status).toBe(200);
    });
});
