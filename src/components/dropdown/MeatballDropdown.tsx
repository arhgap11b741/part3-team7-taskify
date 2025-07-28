'use client';

import { useState } from 'react';
import { DropdownContextType } from './DropdownTypes';
import { DropdownContext, useDropdownContext } from './DropdownContext';

const DropdownRoot = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const contextValue: DropdownContextType = {
    isOpen,
    selectedItem,
    toggleDropdown,
    closeDropdown,
    setSelectedItem,
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      <div className='relative h-7'>{children}</div>
    </DropdownContext.Provider>
  );
};

const DropdownTrigger = ({ children }: { children: React.ReactNode }) => {
  const { toggleDropdown } = useDropdownContext();

  return (
    <button className='cursor-pointer' onClick={toggleDropdown}>
      {children}
    </button>
  );
};

const DropdownContent = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useDropdownContext();

  return (
    <div
      className={`absolute left-0 w-24 bg-white border border-gray-200 text-black rounded shadow-lg transition-all duration-200 ease-out ${isOpen ? 'mt-2 visible opacity-100' : 'mt-0 invisible opacity-0'}`}
    >
      {children}
    </div>
  );
};

const DropdownItem = ({ children, onClick }: { children: string; onClick: () => void }) => {
  const { closeDropdown, setSelectedItem } = useDropdownContext();

  const handleClick = () => {
    if (!onClick) {
      setSelectedItem(children);
    } else {
      onClick();
    }
    closeDropdown();
  };

  return (
    <button
      onClick={handleClick}
      className='w-full px-4 py-2 flex hover:bg-violet-200 cursor-pointer'
    >
      {children}
    </button>
  );
};

const MeatballDropdown = {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
};

export default MeatballDropdown;
