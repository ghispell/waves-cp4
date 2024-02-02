import { createContext, useState, useContext, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("surfer")) || false
  );

  useEffect(() => {
    window.localStorage.setItem("surfer", JSON.stringify(user));
  }, [user]);

  const value = useMemo(() => {
    return { user, setUser };
  }, [user, setUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
