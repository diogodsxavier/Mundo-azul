import React, { createContext, useState, useEffect, useContext } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserContextType {
  user: User | null;
  login: (name: string, age: number) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('mundoAzulUser');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (name: string, age: number) => {
    const newUser = { name, age };
    setUser(newUser);
    localStorage.setItem('mundoAzulUser', JSON.stringify(newUser));
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
