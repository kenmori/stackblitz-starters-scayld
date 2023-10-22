export const fetchData = async (init?: RequestInit, query = "") => {
  // 別のNext.jsでPort=3001でAPIが起動している想定
  const res = await fetch(`http://localhost:3000/source${query}`, init);
  const {data} = await res.json()
  return data
};
