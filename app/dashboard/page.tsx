import { fetchData } from '@/app/lib/fetchData';

export const revalidate = 0;
export default async function Page() {
  const data = await fetchData();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Dashboard page
      {data}
    </div>
  );
}
