import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { EmptyUser } from "../../../../redux/views/login/constants";
import { setCurrentUser } from "../../../../redux/views/login/actions";
import { TLoginState } from "../../../../redux/views/login/types";
import { TReducer } from "../../../../redux/types";
import { Container, User } from "./NavBar.styles";

export const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector<TReducer>((state) => (state.login)) as TLoginState;

    const handleLogout = () => {
        dispatch(setCurrentUser(EmptyUser));
        navigate("/login", { replace: true });
    };

    return (
        <Container>
            <User>
                {state.currUser.userName ? state.currUser.userName : "Test"}
            </User>
            <Button sx={{ width: "100px" }} variant="contained" size="large" onClick={handleLogout}>LOGOUT</Button>
        </Container>
    );
};