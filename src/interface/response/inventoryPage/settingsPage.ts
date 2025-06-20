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

export interface userSettingsList {
  id: number;
  name: string;
  email: string;
  permissionRoles: string;
  department: string;
  phone: string;
  time: string;
  status: boolean;
}
