import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

// ...

const RequireIsSignedIn = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();

    if (!auth?.accessToken) {
        navigate("/user/login");
        return null;
    }

    return <Outlet />;
};

export default RequireIsSignedIn;
