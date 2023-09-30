import Link from "next/link";

async function getAllMakes() {
  const res = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
  );
  return res.json();
}

const mainTs =
  "flex min-h-screen flex-col items-center justify-between font-mono p-24";
const containerTs =
  "z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex";

export default async function Home() {
  const getMakers = await getAllMakes();

  return (
    <main
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   padding: "6rem",
      //   gap: "2rem",
      // }}
      className={mainTs}
    >
      <Link href="/15">Link 15</Link>
      <div className={containerTs}>
        <h1>Hello world</h1>
      </div>
      <ul style={{ columnCount: 3, padding: 0, margin: 0 }}>
        {getMakers.Results.map((item: any) => (
          <li key={item.Made_ID}>{item.Make_Name}</li>
        ))}
      </ul>
    </main>
  );
}
