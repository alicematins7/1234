import { AuthContext } from "contexts/authContexts"
import { IAuthContextData } from "interfaces/user.interface"
import { useContext } from "react"

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser utilizado com o AuthProvider')
  }
  return context
}

export { useAuth }