import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ErrorDiv, ErrorTitle } from "./ErrorPage.styles";

export const ErrorPage = () => {
    const navigate = useNavigate();

    const handleRedirect = () => navigate("/login", { replace: true });
    
    return (
        <ErrorDiv>
            <ErrorTitle>Error! Please Log in</ErrorTitle>
            <Button variant="contained" color="primary" size="large" onClick={handleRedirect}>LOG IN</Button>
        </ErrorDiv>
    );
};