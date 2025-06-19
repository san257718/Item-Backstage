export interface settingsPageList {
    id: number;
    name: string;
}

export interface settingsPageResponse extends settingsPageList {
  id: number;
  name: string;
  description: string;
  status: boolean;
  list: settingsPageList[];
}