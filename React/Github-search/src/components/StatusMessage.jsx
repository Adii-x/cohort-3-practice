// src/components/StatusMessage.jsx
function StatusMessage({ type, children }) {
  const styles = {
    loading: "text-gray-500",
    error: "text-red-500",
  };

  return <p className={styles[type] || "text-gray-600"}>{children}</p>;
}

export default StatusMessage;
