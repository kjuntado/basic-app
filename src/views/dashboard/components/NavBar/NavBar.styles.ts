import { styled, Typography } from "@mui/material";

export const Container = styled('div')`
    display: flex;
    flex-direction: row;
    height: 50px;
    padding: 20px;
    border-bottom: 2px solid #4d5776;
`;

export const User = styled(Typography)`
    font-size: 28px;
    color: #4d5776;
    width: calc(100vw - 140px);
    display: flex;
    align-items: center;
`;