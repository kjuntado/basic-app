import userEvent from "@testing-library/user-event";
import { Routes, Route } from "react-router-dom";
import { MemoryRouter } from "react-router";

import { render } from "../../../utils/testUtilities";
import Dashboard from "../../dashboard/Dashboard";
import { CardComponent } from "../components/Card/Card";
import { queryByTestId } from "@testing-library/react";


describe("<CardComponent />", () => {
    function renderCard () {
        return render(
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<CardComponent />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </MemoryRouter>
        );
    };

    test("should display form", async () => {
        const { findByTestId } = renderCard();

        const branchInput = await findByTestId("branchId-input");
        expect(branchInput).toBeInTheDocument();

        const usernameInput = await findByTestId("username-input");
        expect(usernameInput).toBeInTheDocument();

        const pwInput = await findByTestId("pw-input");
        expect(pwInput).toBeInTheDocument();
    });
    
    test("should render correct labels", () => {
        const { getAllByLabelText  } = renderCard();

        const branchLabel = getAllByLabelText("Branch ID");
        expect(branchLabel).not.toHaveLength(0);

        const usernameLabel = getAllByLabelText("Username");
        expect(usernameLabel).not.toHaveLength(0);

        const pwLabel = getAllByLabelText("Password");
        expect(pwLabel).not.toHaveLength(0);
    });

    test("should show error", async () => {
        const { findByTestId } = renderCard();

        const branchInput = await findByTestId("branchId-input");
        userEvent.type(branchInput, "aa");

        const loginBtn = await findByTestId("login-btn");
        userEvent.click(loginBtn);

        const errorMsg = await findByTestId("login-error");
        expect(errorMsg).toBeInTheDocument();
    });

    test("should not show error", async () => {
        const { findByTestId, queryByTestId } = renderCard();

        const branchInput = await findByTestId("branchId-input");
        userEvent.type(branchInput, "10001");

        const usernameInput = await findByTestId("username-input");
        userEvent.type(usernameInput, "testuser01");

        const pwInput = await findByTestId("pw-input");
        userEvent.type(pwInput, "pa55w0rd001");

        const loginBtn = await findByTestId("login-btn");
        userEvent.click(loginBtn);

        const errorMsg = queryByTestId("login-error");
        expect(errorMsg).not.toBeInTheDocument();
    });
});