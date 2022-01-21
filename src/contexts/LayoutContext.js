// import React, { useState, createContext } from 'react';

// const LayoutContext = createContext();
// function getWindowDimensions() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//       width,
//       height
//     };
// };
// const LayoutContextProvider = ({ children, initialProfileName = "User Profile" }) => {
//     const [profileName, setProfileName] = useState(initialProfileName);
//     const [profileIntro, setProfileIntro] = useState("Javascript Developer and enthusiast");
//     return (
//         <LayoutContext.Provider value={{ profileName, profileIntro }}>
//             {children}
//         </LayoutContext.Provider>
//     )
// };

// export { LayoutContext, LayoutContextProvider };