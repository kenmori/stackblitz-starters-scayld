export default function Template({ children }: { children: React.ReactNode }) {
  // 子供のレイアウトとpageをラップする
  // Layoutはページ遷移時に再レンダリングを行わず、状態を維持します。
  // 一方で、Templateは新しいページ遷移ごとに再レンダリングを行います。
  return (
    <>
      <h2>Template Header</h2>
      {children}
      <h2>Template Footer</h2>
    </>
  );
}