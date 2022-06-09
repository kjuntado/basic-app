import { useSelector } from "react-redux";

import { TLoginState } from "../../redux/views/login/types";
import { TReducer } from "../../redux/types";
import { NavBar } from "./components/NavBar/NavBar";
import { AddUserCard } from "./components/AddUserCard/AddUserCard";
import { DataTable } from "./components/DataTable/DataTable";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { DetailsContainer } from "./Dashboard.styles";

const Dashboard = () => {
    const state = useSelector<TReducer>((state) => (state.login)) as TLoginState;

    const renderPage = () => {
        return (
            state.currUser.userName ?
                <>
                    <NavBar />
                    <DetailsContainer>
                        <AddUserCard />
                        <DataTable />
                    </DetailsContainer>
                </> :
                <ErrorPage />
        );
    };
    return (
        <div>
            {renderPage()}
        </div>
    );
};

export default Dashboard;