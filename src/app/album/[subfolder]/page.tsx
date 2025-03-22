export default async function SubFolderPage({
  params,
}: {
  params: Promise<{ subfolder: string }>
}) {
  const { subfolder } = await params
  return <div>My Post: {subfolder}</div>
}