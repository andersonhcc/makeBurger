import React, { useState, createContext, ReactNode, useContext, useEffect } from "react";
import { Alert } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../service/api';

interface IAuth {
  user: IUser;
  isAuthenticated: boolean;
  signIn: (credentials: ISignIn) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  loadingAuth: boolean;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface IAuthProvider {
  children: ReactNode
}

interface ISignIn {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as IAuth);

function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser>({
    id: '',
    name: '',
    email: '',
    token: '',
  });

  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);


  const isAuthenticated = !!user.name;

  useEffect(() => {
    async function getUser() {
      const userInfo = await AsyncStorage.getItem('@makeburger');
      let hasUser: IUser = JSON.parse(userInfo || '{}');

      if (Object.keys(hasUser).length > 0) {
        api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`;
        
        setUser({
          id: hasUser.id,
          name: hasUser.name,
          email: hasUser.email,
          token: hasUser.token,
        })
      }
      
      setLoading(false);

    }

    getUser();
  }, [])

  async function signIn({ email, password }: ISignIn) {
    setLoadingAuth(true);

    try {
      const response = await api.post('/session', {
        email,
        password,
      })

      const { id, name, token } = response.data;

      const data = {
        ...response.data,
      }

      await AsyncStorage.setItem('@makeburger', JSON.stringify(data));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setUser({
        id,
        name,
        token,
        email,
      });

      setLoadingAuth(false);

    } catch (error) {
      console.log('Error: ' + error);
      Alert.alert('Entrar', 'Email e/ou senha incorretos');
      setLoadingAuth(false);
    }
  }


  async function signOut(){
    await AsyncStorage.clear()
    .then(() => {
      setUser({
        id: '',
        name: '',
        email: '',
        token: '',
      })
    })
  }


  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      signIn,
      loading,
      loadingAuth,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  )

}


function useAuth() {
  const context = useContext(AuthContext)

  return context;
}

export { useAuth, AuthProvider }
