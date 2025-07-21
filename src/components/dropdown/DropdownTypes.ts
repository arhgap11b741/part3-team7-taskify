export interface DropdownContextType {
  isOpen: boolean;
  selectedItem: string | null;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  setSelectedItem: (item: string | null) => void;
}
