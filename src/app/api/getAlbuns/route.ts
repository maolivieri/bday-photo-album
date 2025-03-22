import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
import { Folder, GetFolderResponse, SubFolder, SubFolderResponse } from '../types';

export async function GET() {
  try {
    const albums: GetFolderResponse = await cloudinary.api.sub_folders('Album')
    const response: Folder[] = [];

    for (const album of albums.folders) {
      const sub_folders: SubFolderResponse = await cloudinary.api.sub_folders(album.path);
      const subFoldersResponse: SubFolder[] = [];
      for (const sub_folder of sub_folders.folders) {
        const resources = await cloudinary.api.resources_by_asset_folder(sub_folder.path);
        subFoldersResponse.push({
          ...sub_folder,
          resources: resources.resources
        })
      }
      response.push({
        ...album,
        sub_folders: subFoldersResponse
      })
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('Erro ao buscar pastas:', error);
    return NextResponse.json({ error: 'Erro ao buscar pastas' }, { status: 500 });
  }
}
