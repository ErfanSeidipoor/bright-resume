"use client";
import { useData } from "./useData";

export default function Page({
  searchParams,
}: {
  searchParams: { "oauth-token": string | undefined };
}) {
  const { loading } = useData(searchParams["oauth-token"]);

  return (
    <div className="flex flex-col justify-center items-center w-100 h-screen gap-1  px-4">
      {loading && "Loading..."}
    </div>
  );
}
