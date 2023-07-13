import { Outlet } from "react-router-dom";

import { Container } from "./sharedLayout.styled";

const SharedLayout = () => {
    // const { isLight } = useContext(ThemeContext);

    return (
        <Container>
            <main>
                <Outlet />
            </main>
        </Container>
    )
};


export default SharedLayout;