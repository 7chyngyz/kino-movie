import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = async () => {
  const accessToken = cookies().get("eco_movie_access_token")?.value || null;

  return NextResponse.json(accessToken);
};
