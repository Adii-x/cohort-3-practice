// src/App.jsx
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import useDebounce from "./hooks/useDebounce";
import fetchGithubUser from "./services/github";
import UserCard from "./components/UserCard";
import StatusMessage from "./components/StatusMessage";

function App() {
  const [username, setUsername] = useState("");
  const debouncedUsername = useDebounce(username, 500);

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (debouncedUsername.trim() === "") {
      setUserData(null);
      setError(null);
      return;
    }

    async function getUser() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGithubUser(debouncedUsername);
        setUserData(data);
      } catch (err) {
        setError(err.message);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, [debouncedUsername]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20 px-4">
      <h1 className="text-2xl font-bold mb-6">GitHub User Search</h1>
      <SearchBar value={username} onChange={setUsername} />

      <div className="mt-6 w-full max-w-md">
        {loading && <StatusMessage type="loading">Loading...</StatusMessage>}
        {error === "USER_NOT_FOUND" && (
          <StatusMessage type="error">
            No user found with that username.
          </StatusMessage>
        )}
        {error === "NETWORK_ERROR" && (
          <StatusMessage type="error">
            Something went wrong. Try again.
          </StatusMessage>
        )}
        {userData && <UserCard user={userData} />}
      </div>
    </div>
  );
}

export default App;
