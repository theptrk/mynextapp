const notes = [
  { title: "Hello", content: "abc def ghi" },
  { title: "World", content: "lmn opq rst" },
];
function fakeRequest(i: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(notes[Number(i)]);
    }, 1000);
  });
}
export default async function NotePage({ params }: any) {
  const note = (await fakeRequest(params.id)) as any;
  return (
    <div>
      <h1>title: {note.title}</h1>
      <p>content: {note.content}</p>
    </div>
  );
}
