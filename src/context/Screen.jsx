import { createContext,useState } from 'react';
export const ScreenContext = createContext()


export const Screen = ({ children }) => {
  const [screen, setScreen] = useState("home")

  return (
    <ScreenContext.Provider value = { { screen, setScreen}}>
      {children}
    </ScreenContext.Provider>
    )

}
