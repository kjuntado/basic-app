import { styled, Typography } from "@mui/material";

export const Card = styled('div')`
    display: flex;
    flex-direction: column;
    height: 50vh;
    min-height: 400px;
    width: 20vw;
    min-width: 300px;
    border-radius: 6px;
    border: 2px solid #4d5776;
    padding: 24px;
`;

export const Title = styled(Typography)`
    font-size: 28px;
    color: #4d5776;
`;