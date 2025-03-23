import { ResourceApiResponse } from "cloudinary"

export interface GetFolderResponse {
  folders: Folder[]
}

export interface SubFolderResponse {
  folders: SubFolder[]
}

export interface ResourceMetadata {
  date?: string;
  description?: string;
  size?: string;
  time?: string;
  weight?: string;
}

type Resource = ResourceApiResponse['resources'][0] & {
  context?: {
    custom?: ResourceMetadata
  }
}

export interface SubFolder {
  name: string;
  path: string;
  external_id: string;
  resources: Resource[];
}

export interface Folder {
  name: string;
  path: string;
  external_id: string;
  sub_folders: SubFolder[]
}