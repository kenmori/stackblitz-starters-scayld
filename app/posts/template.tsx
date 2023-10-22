
export default function Template({ children }: { children: React.ReactNode }) {
  console.log('Template rendered');
  return (
    <>
      <h2>Template Header</h2>
      {children}
      <h2>Template Footer</h2>
    </>
  );
}