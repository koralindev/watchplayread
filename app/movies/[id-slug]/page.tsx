export default async function MoviePage({
  params,
}: {
  params: Promise<{ idSlug: string }>;
}) {
  const res = await params;
  const id = res["id-slug"].split("-")[0];

  const movie = 0;

  return <div>Какой-то фильм</div>;
}
