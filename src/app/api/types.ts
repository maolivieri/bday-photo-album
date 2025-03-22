import { ResourceApiResponse } from "cloudinary"

export interface GetFolderResponse {
  folders: Folder[]
}

export interface SubFolderResponse {
  folders: SubFolder[]
}

export interface SubFolder {
  name: string;
  path: string;
  external_id: string;
  resources: ResourceApiResponse['resources'];
}

export interface Folder {
  name: string;
  path: string;
  external_id: string;
  sub_folders: SubFolder[]
}