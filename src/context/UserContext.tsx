import React, { createContext, useState, useEffect, useContext } from 'react';

export type AchievementID = 'FIRST_QUIZ' | 'PERFECT_EASY_QUIZ' | 'TEN_ANIMALS' | 'CONSERVATION_GUARDIAN' | 'ALL_DIFFICULTIES' | 'SEVEN_SEAS_VETERAN' | 'MEMORY_MASTER';

interface User {
  name: string;
  age: number;
  achievements: AchievementID[];
}

interface UserContextType {
  user: User | null;
  login: (name: string, age: number) => void;
  unlockAchievement: (id: AchievementID) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUserJSON = localStorage.getItem('mundoAzulUser');
    if (savedUserJSON) {
      const savedUser = JSON.parse(savedUserJSON);
      if (!savedUser.achievements) {
        savedUser.achievements = [];
      }
      setUser(savedUser);
    }
  }, []);

  const login = (name: string, age: number) => {
    const newUser: User = { name, age, achievements: [] };
    setUser(newUser);
    localStorage.setItem('mundoAzulUser', JSON.stringify(newUser));
  };

  const unlockAchievement = (id: AchievementID) => {
    setUser(currentUser => {
      if (!currentUser || currentUser.achievements.includes(id)) {
        return currentUser;
      }
      const updatedUser = {
        ...currentUser,
        achievements: [...currentUser.achievements, id],
      };
      localStorage.setItem('mundoAzulUser', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  return (
    <UserContext.Provider value={{ user, login, unlockAchievement }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
