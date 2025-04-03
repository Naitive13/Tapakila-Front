"use client";
import EventDetail from "@/components/EventDetail";
import Loading from "@/components/Loading";
import { getData } from "@/lib/fetcher";
import { use } from "react";
import useSWR from "swr";

type Params = {
  params: Promise<{ eventId: string }>;
};

export default function Page({ params }: Params) {
  const { eventId } = use(params);
  const { data, error, isLoading } = useSWR(`/api/event/${eventId}`, getData);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div> Error loading event data</div>;
  }

  return (
    <>
      <div className="flex justify-center items-center p-10 h-[90dvh]">
        <EventDetail data={data} />
      </div>
    </>
  );
}
