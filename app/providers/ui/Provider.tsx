import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import store from '../modules/store'

interface IProps {
  children: ReactNode
}

export const ReduxProvider = ({ children }: IProps) => {
  return <Provider store={store}>{children}</Provider>
}
