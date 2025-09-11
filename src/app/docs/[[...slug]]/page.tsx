export default function Docs({ params }: { params: { slug: string[] } }) {
  // each articles as article
  if (params.slug?.length === 2) {
    return (
      <h1>
        return docs for a specific page example {params.slug[0]} and concept
        {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return (
      <h1>docs for a specific page example {params.slug[0]} and concept</h1>
    );
  }
}
