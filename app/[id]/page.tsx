// export async function getServerSideProps(params: any) {
//   console.log("🚀 ~ file: page.tsx:2 ~ getServerSideProps ~ params:", params);
//   console.log("getServerSideProps this");
// }

export default function toDo({ params, searchParams }: any) {
  return (
    <div>
      <h3>ToDo id {params.id}</h3>
    </div>
  );
}
