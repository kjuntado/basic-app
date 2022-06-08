import { Button, styled, Typography } from "@mui/material";

export const FormContainer = styled('div')`
    height: 500px;
    width: 400px;
    display: flex;
    flex-direction: column;
    background-color: #dfe1ec;
    border-radius: 6px;
    padding: 20px;
`;

export const Label = styled(Typography)`
    font-size: 20px;
    color: #4d5776;
    line-height: 32px;
`;

export const ButtonContainers = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    > button {
        width: 100px;
        margin-left: 20px;
    }
`;