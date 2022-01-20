import React, { useState, createContext } from 'react';

const ProfileContext = createContext();

const ProfileContextProvider = ({ children, initialProfileName = "User Profile" }) => {
    const [profileName, setProfileName] = useState(initialProfileName);
    const [profileIntro, setProfileIntro] = useState("Javascript Developer and enthusiast");
    return (
        <ProfileContext.Provider value={{ profileName, profileIntro }}>
            {children}
        </ProfileContext.Provider>
    )
};

export { ProfileContext, ProfileContextProvider };