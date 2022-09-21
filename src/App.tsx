import { Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/details";

import Homepage from "./pages/homepage";
import routes from "./routes";

function App() {
    return (
        <Routes>
            <Route path={routes.homepage} element={<Homepage />} />
            <Route path={`${routes.details}/:name`} element={<DetailsPage />} />
        </Routes>
    );
}

export default App;
