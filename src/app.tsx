import { useRoutes } from "react-router-dom";
import { routes } from "./router/routes";

export default function App() {
  const element = useRoutes(routes);

  return (
    <div className="bg-all-page-background w-full h-screen">
      {/* <LoginPage /> */}

      {element}
    </div>
  );
}
