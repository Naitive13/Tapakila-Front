"use client";
import EditUserInfo from "@/components/EditUserInfo";
import Loading from "@/components/Loading";
import ReservationUser from "@/components/ReservationUser";
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
      <div className="flex justify-between items-stretch py-5 px-5 w-6/12 rounded-md border-2 border-gray-100 shadow-md xl:px-5 min-h-5/12 bg-base-100 item-center">
        <UserProfileCard info={data} />
      </div>

      <div className="justify-between items-stretch py-5 px-5 w-6/12 rounded-md border-2 border-gray-100 shadow-md xl:px-5 bg-base-100 item-center">
        <h2 className="p-4 pb-2 text-3xl tracking-wide opacity-60">
          Your Reservation
        </h2>
        <ul className="flex gap-y-3 py-6 min-h-full list rounded-box">
          <ReservationUser />
          <ReservationUser />
        </ul>
      </div>

      <EditUserInfo defaultValues={data} />

      {/* <div className="flex justify-between items-stretch py-5 px-5 w-5/12 rounded-md xl:px-5 bg-base-200"></div> */}
    </>
  );
}
