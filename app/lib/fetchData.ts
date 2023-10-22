export const fetchData = async () => {
  // 別のNext.jsでPort=3001でAPIが起動している想定
  // const res = await fetch('https:localhost:3001');
  const { data } = { data: 2 };
  return data;
};
