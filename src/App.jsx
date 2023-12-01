import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { PageLayout } from "./Layout/PageLayout/PageLayout";

function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </PageLayout>
    </>
  );
}
export default App;
