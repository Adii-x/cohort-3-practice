// src/components/UserCard.jsx
function UserCard({ user }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 flex gap-4 items-start shadow-sm">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-20 h-20 rounded-full border border-gray-200"
      />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
        <p className="text-gray-500 text-sm">@{user.login}</p>

        {user.bio && <p className="text-gray-700 text-sm mt-2">{user.bio}</p>}

        <div className="flex gap-4 mt-3 text-sm text-gray-600">
          <span>
            <strong>{user.followers}</strong> followers
          </span>
          <span>
            <strong>{user.following}</strong> following
          </span>
          <span>
            <strong>{user.public_repos}</strong> repos
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
