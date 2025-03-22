import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function GET() {
  try {
    const result = await cloudinary.api.resources_by_asset_folder('intro', {
      type: 'upload',
      max_results: 10,
    });

    console.log("ASDASDASD", result)
    return NextResponse.json(result.resources);
  } catch (error) {
    console.error('Erro ao buscar imagens:', error);
    return NextResponse.json({ error: 'Erro ao buscar imagens' }, { status: 500 });
  }
}
