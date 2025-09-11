export default async function Articlesfunction({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const articleId = 5;
  return (
    <>
      <h1>article {articleId}</h1>
    </>
  );
}
