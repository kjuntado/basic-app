import { NavBar } from "./components/NavBar/NavBar";
import { AddUserCard } from "./components/AddUserCard/AddUserCard";
import { DataTable } from "./components/DataTable/DataTable";
import { DetailsContainer } from "./Dashboard.styles";

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <DetailsContainer>
                <AddUserCard />
                <DataTable />
            </DetailsContainer>
        </div>
    );
};

export default Dashboard;