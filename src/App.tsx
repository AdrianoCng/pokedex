import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage";
import routes from "./routes";
import styles from "./App.module.scss";
import SearchForm from "./containers/SearchForm/SearchForm";

function App() {
    return (
        <div className={styles.container}>
            <SearchForm />

            <Routes>
                <Route path={routes.homepage} element={<Homepage />} />
            </Routes>
        </div>
    );
}

export default App;
