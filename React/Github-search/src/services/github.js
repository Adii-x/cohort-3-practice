// src/services/github.js
async function fetchGithubUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('USER_NOT_FOUND');
    }
    throw new Error('NETWORK_ERROR');
  }

  const data = await response.json();
  return data;
}

export default fetchGithubUser;