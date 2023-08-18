import { NextResponse } from "next/server";

export async function GET(request,{ params }) {
  const number = params.n;
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${number}`
  );
  const data = await res.json();
  return NextResponse.json({ data });
}
