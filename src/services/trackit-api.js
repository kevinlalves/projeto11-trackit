const host = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const login = async (email, password) => {
  return fetch(`${host}/auth/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  }).then(response => response.json());
};

const signup = async (email, name, image, password) => {
  return fetch(`${host}/auth/sign-up`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name, image, password })
  }).then(response => response.json());
};

const createHabit = async (name, days, token) => {
  return fetch(`${host}/habits`, {
    method: "post",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    body: JSON.stringify({ name, days })
  }).then(response => response.json());
};

const listHabits = async (token) => {
  return fetch(`${host}/habits`, { headers: { "Authorization": `Bearer ${token}` } }).then(response => response.json());
};

const deleteHabit = async (habitId, token) => {
  return fetch(`${host}/habits/${habitId}`, { method: "delete", headers: { "Authorization": `Bearer ${token}` } });
};

const listTodaysHabits = async (token) => {
  return fetch(`${host}/habits/today`, {
    headers: { "Authorization": `Bearer ${token}` }
  }).then(response => response.json());
};

const checkHabitDone = async (habitId, token) => {
  return fetch(`${host}/habits/${habitId}/check`, { method: "post", headers: { "Authorization": `Bearer ${token}` } });
};

const uncheckHabitDone = async (habitId, token) => {
  return fetch(`${host}/habits/${habitId}/uncheck`, {
    method: "post",
    headers: { "Authorization": `Bearer ${token}` }
  });
};

const habitHistoric = async (token) => {
  return fetch(`${host}/habits/history/daily`, {
    headers: { "Authorization": `Bearer ${token}` }
  }).then(response => response.json());
};

export {
  login, signup, createHabit, listHabits, deleteHabit, listTodaysHabits, checkHabitDone, uncheckHabitDone, habitHistoric
};
