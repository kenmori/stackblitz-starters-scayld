import { fetchData } from '@/app/lib/fetchData';
export const revalidate = 2;

export default async function Page() {
  const data = await fetchData(undefined, "?page=1");
  return (
    <div className="">
      <div>
      Edit Page
      </div>
      <div>{data}</div>
    </div>
  );
}
