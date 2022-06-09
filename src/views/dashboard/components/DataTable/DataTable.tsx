import { MouseEvent } from "react";
import { Button } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

import { TDashboardState } from "../../../../redux/views/dashboard/types";
import { removeUser } from "../../../../redux/views/dashboard/actions";
import { TReducer } from "../../../../redux/types";
import { GridContainer } from "./DataTable.styles";
import { formatRows } from "./constants";

export const DataTable = () => {
    const dispatch = useDispatch();
    const state = useSelector<TReducer>((state) => (state.db)) as TDashboardState;
    
    // Event Handler for Remove click
    const handleRemoveBtn = (params: GridRenderCellParams) => (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(removeUser(params.row.userName));
    };

    // Function to render button
    const renderActionButton = (params: GridRenderCellParams) => {
        return (
            <Button variant="contained" color="primary" size="small" onClick={handleRemoveBtn(params)}>Remove</Button>
        );
    };

    // Grid columns
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: '#',
            width: 50
        },
        {
            field: 'branchId',
            headerName: 'Branch ID',
            width: 100
        },
        {
            field: 'userName',
            headerName: 'Username',
            width: 100
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 250,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.firstName || ''} ${params.row.middleName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'position',
            headerName: 'Position',
            width: 200
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: renderActionButton
        },
    ];

    return (
        <GridContainer>
            <DataGrid
                columns={columns}
                rows={formatRows(state.users)}
                pageSize={10}
            />
        </GridContainer>
    );
};