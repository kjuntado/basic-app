import React, { MouseEvent } from "react";
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";

import { Card, Title } from "./Card.style";

export const CardComponent = () => {
    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const renderTextField = (label: string, id: string) => {
        return (
            <TextField
                label={label}
                id={`${id}-input`}
                margin="normal"
            />
        );
    };

    const renderPassword = () => {
        return (
            <FormControl sx={{ mt: 2, mb: 1 }} variant="outlined">
                <InputLabel htmlFor="pw-input">
                    Password
                </InputLabel>
                <OutlinedInput
                    id="pw-input"
                    //type={values.showPassword ? 'text' : 'password'}
                    type="password"
                    //value={values.password}
                    //onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            //onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            <VisibilityOff />
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
            {renderTextField('Branch ID', 'branch-id')}
            {renderTextField('Username', 'username')}
            {renderPassword()}
        </Card>
    );
};