import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";
import { Slide, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
    <ToastContainer position="bottom-right" autoClose={2000} closeOnClick={true} transition={Slide} />
  </Provider>,
);
