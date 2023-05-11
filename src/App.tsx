import "./App.css";
import { AppProvider } from "./providers/app";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <AppProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AppProvider>
  );
}

export default App;
