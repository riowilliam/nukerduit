export interface SidenavItem {
  id: number;
  label: string;
  url?: string;
  children?: ChildSidenavItem[];
}

export interface ChildSidenavItem {
  id: number;
  label: string;
  url: string;
}
