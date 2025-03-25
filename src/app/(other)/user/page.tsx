"use client";
import Loading from "@/components/Loading";
import UserProfileCard from "@/components/UserProfileCard";
import { getData } from "@/lib/fetcher";
import useSWR from "swr";

export default function UserPage() {
  const { data, error, isLoading } = useSWR(`api/user`, getData);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div> Error loading user data</div>;
  }

  return (
    <>
      <div className="flex justify-between items-stretch py-5 px-5 w-3/12 rounded-md shadow-md xl:px-5 bg-base-100 item-center">
        <UserProfileCard info={data} />
      </div>
      <div className="flex justify-between items-stretch py-5 px-5 w-5/12 rounded-md xl:px-5 bg-base-200"></div>
      <div className="flex justify-between items-stretch py-5 px-5 w-4/12 rounded-md xl:px-5 bg-base-200"></div>
    </>
  );
}
