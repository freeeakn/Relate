import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container my-64 flex flex-col items-center gap-4">
      <h2 className=" text-6xl">{'Not Found :('}</h2>
      <p>Could not find requested resource</p>
      <Link className=" btn btn-primary" href="/">Return Home</Link>
    </div>
  );
}
