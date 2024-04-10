
import { createContext } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = () => {
    return (
    <CarrinhoContext.Provider>
        {children}
    </CarrinhoContext.Provider>
)
}
