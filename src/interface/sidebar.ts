interface SubMenuItem {
  path: string;
  label: string;
}

export default interface MenuItem extends SubMenuItem {
  id: string;
  path: string;
  icon: React.ComponentType;
  label: string;
  subItems: SubMenuItem[];
}
