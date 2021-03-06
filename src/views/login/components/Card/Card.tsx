import React, { ChangeEvent, MouseEvent, useState } from "react";
import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCurrentUser, setError } from "../../../../redux/views/login/actions";
import { TDashboardState } from "../../../../redux/views/dashboard/types";
import { TReducer } from "../../../..//redux/types";
import { useValidator } from "../../utils/useValidator";
import { Card, Error, Title } from "./Card.style";

export const CardComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const state = useSelector<TReducer>((state) => (state.db)) as TDashboardState;

    // Local States
    const [branchId, setBranchId] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');

    // Custom Hooks
    const { checkValidity } = useValidator();

    // Event handlers
    const handleButtonClick = () => {
        const { errorMessage, currUser } = checkValidity({ branchId, username, password, users: state.users });
        if (errorMessage) dispatch(setError(true));
        else {
            dispatch(setError(false));
            dispatch(setCurrentUser(currUser));
        }
        setErrorMsg(errorMessage);
        if (!errorMessage) navigate("/dashboard", { replace: true });
    };

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChange = (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
        switch (type) {
            case 'branchId':
                setBranchId(event.target.value);
                break;
            case 'username':
                setUsername(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            default:
                break;
        }
    };

    // Render functions
    const renderTextField = (label: string, id: string) => {
        return (
            <FormControl sx={{ mt: 2, mb: 1 }} variant="outlined">
                <InputLabel htmlFor={`${id}-input`}>
                    {label}
                </InputLabel>
                <OutlinedInput
                    id={`${id}-input`}
                    data-testid={`${id}-input`}
                    type="text"
                    value={id === 'branchId' ? branchId : username}
                    onChange={handleChange(id)}
                    label={label}
                />
            </FormControl>
        );
    };

    const renderPassword = () => {
        return (
            <FormControl sx={{ mt: 2, mb: 3 }} variant="outlined">
                <InputLabel htmlFor="pw-input">
                    Password
                </InputLabel>
                <OutlinedInput
                    id="pw-input"
                    data-testid="pw-input"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
        );
    };

    return (
        <Card>
            <Title>Login</Title>
            {renderTextField('Branch ID', 'branchId')}
            {renderTextField('Username', 'username')}
            {renderPassword()}
            <Button data-testid="login-btn" variant="contained" size="large" onClick={handleButtonClick}>LOGIN</Button>
            {errorMsg && <Error data-testid="login-error">{errorMsg}</Error>}
        </Card>
    );
};