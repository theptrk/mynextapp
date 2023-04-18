import Link from "next/link";

function fakeRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { title: "Hello", content: "abc def ghi" },
        { title: "World", content: "lmn opq rst" },
      ]);
    }, 1000);
  });
}
export default async function NotesPage() {
  const notes = (await fakeRequest()) as any[];
  return (
    <div>
      <h1>My notes</h1>
      {notes.map((note, i) => {
        return (
          <div key={i}>
            <Link href={`/notes/${i}`}>
              title: {note.title} content: {note.content}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
