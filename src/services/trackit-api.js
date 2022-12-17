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

const createHabit = async (name, days) => {
  return fetch(`${host}/habits`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, days })
  }).then(response => response.json());
};

const listHabits = async () => {
  return fetch(`${host}/habits`).then(response => response.json());
};

const deleteHabit = async (habitId) => {
  return fetch(`${host}/habits/${habitId}`, { method: "delete" });
};

const listTodaysHabits = async () => {
  return fetch(`${host}/habits/today`).then(response => response.json());
};

const checkHabitDone = async (habitId) => {
  return fetch(`${host}/habits/${habitId}/check`, { method: "post" });
};

const uncheckHabitDone = async (habitId) => {
  return fetch(`${host}/habits/${habitId}/uncheck`, { method: "post" });
};

const habitHistoric = async () => {
  return fetch(`${host}/habits/history/daily`).then(response => response.json());
};

export {
  login, signup, createHabit, listHabits, deleteHabit, listTodaysHabits, checkHabitDone, uncheckHabitDone, habitHistoric
};
