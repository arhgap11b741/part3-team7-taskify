import { createContext, useContext } from 'react';
import { DropdownContextType, UserDropdownContextType } from './DropdownTypes';

const DropdownContextDefaultValues: DropdownContextType = {
  isOpen: false,
  selectedItem: null,
  toggleDropdown: () => {},
  closeDropdown: () => {},
  setSelectedItem: () => {},
};

const UserDropdownContextDefaultValues: UserDropdownContextType = {
  isOpen: false,
  selectedItem: null,
  toggleDropdown: () => {},
  closeDropdown: () => {},
  setSelectedItem: () => {},
};

export const DropdownContext = createContext(DropdownContextDefaultValues);
export const UserDropdownContext = createContext(UserDropdownContextDefaultValues);

export const useDropdownContext = (): DropdownContextType => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    console.error('Dropdown Context는 Dropdown.Root안에서 사용해주세요!');
  }
  return context;
};

export const useUserDropdownContext = (): UserDropdownContextType => {
  const context = useContext(UserDropdownContext);
  if (context === undefined) {
    console.error('Dropdown Context는 Dropdown.Root안에서 사용해주세요!');
  }
  return context;
};
