import { NavBar } from "./components/NavBar/NavBar";
import { AddUserCard } from "./components/AddUserCard/AddUserCard";
import { DetailsContainer } from "./Dashboard.styles";

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <DetailsContainer>
                <AddUserCard />
            </DetailsContainer>
        </div>
    );
};

export default Dashboard;