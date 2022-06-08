import { ChangeEvent, MouseEvent, useState } from "react";
import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import { TUser } from "../../../login/types";
import { addUser } from "../../../../redux/views/dashboard/actions";
import { EmptyFormData } from "../../../../redux/views/login/constants";
import { ButtonContainers, FormContainer, Label } from "./AddUserCard.styles";

export const AddUserCard = () => {
    const dispatch = useDispatch();
    // Local States
    const [values, setValues] = useState<Record<string, unknown>>(EmptyFormData);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // Event Handlers
    const handleChange = (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setValues((oldState) => ({ ...oldState, [type]: event.target.value }));
    };

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleAddForm = () => {
        const newUser = values as unknown as TUser;
        dispatch(addUser(newUser));
    };

    const handleResetForm = () => {
        setValues(EmptyFormData);
    };

    // Render functions
    const renderTextField = (label: string, id: string) => {
        const { [id]: value } = values;
        return (
            <FormControl sx={{ mt: 1, mb: 1 }} variant="outlined">
                <InputLabel htmlFor={`${id}-create-input`} size="small">
                    {label}
                </InputLabel>
                <OutlinedInput
                    id={`${id}-create-input`}
                    type="text"
                    value={value}
                    onChange={handleChange(id)}
                    label={label}
                    size="small"
                />
            </FormControl>
        );
    };

    const renderPassword = () => {
        return (
            <FormControl sx={{ mt: 1, mb: 2 }} variant="outlined" size="small">
                <InputLabel htmlFor="pw-create-input">
                    Password
                </InputLabel>
                <OutlinedInput
                    id="pw-create-input"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
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
                    size="small"
                />
            </FormControl>
        );
    };

    return (
        <FormContainer>
            <Label>Add User</Label>
            {renderTextField('Branch ID', 'branchId')}
            {renderTextField('Username', 'userName')}
            {renderTextField('First Name', 'firstName')}
            {renderTextField('Middle Name', 'middleName')}
            {renderTextField('Last Name', 'lastName')}
            {renderTextField('Position', 'position')}
            {renderPassword()}
            <ButtonContainers>
                <Button
                    variant="outlined"
                    color="primary"
                    size="medium"
                    onClick={handleResetForm}
                >
                    Reset
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={handleAddForm}
                >
                    Add
                </Button>
            </ButtonContainers>
        </FormContainer>
    );
};