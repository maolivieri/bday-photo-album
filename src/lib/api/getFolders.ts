import { Folder } from "@/app/api/types";

export async function getFolders(): Promise<Folder[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getAlbuns`)
    // { cache: 'force-cache' }
    // );
    if (!res.ok) throw new Error('Falha ao buscar albums');
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
