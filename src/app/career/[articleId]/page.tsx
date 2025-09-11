export default function CareerPage({
  params,
}: {
  params: { articleId: string };
}) {
  // each articles as article

  return <h1>Career {params.articleId}</h1>;
}
