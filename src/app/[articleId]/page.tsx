export default function Articlesfunction({
  params,
}: {
  params: { articleId: string };
}) {
  return (
    <>
      <h1>article {params.articleId}</h1>
    </>
  );
}
