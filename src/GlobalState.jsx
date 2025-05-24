import { createContext, useEffect, useState } from "react";
import { apiUrl } from "./utils/common";
export const GlobalContext = createContext();

export const AppProvider = ({ children }) => {
    const [usersData, setUsersData] = useState([]);

    const fetchData = async () => {
        try {
            const responseObj = await fetch(apiUrl);
            const fetchedData = await responseObj.json();
            setUsersData(fetchedData?.users);
            console.log(fetchedData?.users);
            // setUsersData(newData)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <GlobalContext.Provider value={{ usersData, setUsersData }}>
            {children}
        </GlobalContext.Provider>
    );
};