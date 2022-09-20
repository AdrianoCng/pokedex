import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage";
import routes from "./routes";

function App() {
    return (
        <Routes>
            <Route path={routes.homepage} element={<Homepage />} />
        </Routes>
    );
}

export default App;
