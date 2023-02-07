import { Outlet } from "react-router-dom";
import Header from "@components/Header";

const Layout = ({ Children }) => {
    return (
        <div className="Layout">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;