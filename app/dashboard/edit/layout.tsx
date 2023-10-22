import { fetchData } from '@/app/lib/fetchData';

export default async function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetchData();
  return (
    <div>
      <h1>EditLayout</h1>
      {data}
      <br />
      {children}
    </div>
  );
}
