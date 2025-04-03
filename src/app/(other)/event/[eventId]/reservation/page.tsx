"use client";
import Loading from "@/components/Loading";
import ReservationEvent from "@/components/ReservationEvent";
import { getData } from "@/lib/fetcher";
import { use, useRef } from "react";
import useSWR from "swr";
import { submit } from "./action";
import ReservationForm from "@/components/ReservationForm";

type Params = {
  params: Promise<{ eventId: string }>;
};
export default function ReservationPage({ params }: Params) {
  const { eventId } = use(params);
  const { data, error, isLoading } = useSWR(`/api/event/${eventId}`, getData);
  const ref = useRef<HTMLFormElement>(null);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div> Error loading event data</div>;
  }
  return (
    <>
      <div className="flex justify-center items-center p-10 h-[90dvh]">
        <div className="flex overflow-hidden flex-col justify-center items-center max-w-full rounded-lg shadow-md md:flex-row md:max-h-full bg-base-100 shrink max-h-fit">
          <div className="flex overflow-hidden justify-center items-center min-w-5/12">
            <img
              src={data.eventPoster}
              alt="poster"
              className="self-center size-max"
            />
          </div>
          <div className="flex flex-col p-10 min-w-7/12">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-4xl">
              Make Your Reservation Now !
            </h2>
            <ReservationEvent data={data} />
            <ReservationForm action={submit} ref={ref} eventId={eventId} />
          </div>
        </div>
      </div>
    </>
  );
}
