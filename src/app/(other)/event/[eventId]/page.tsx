"use client";
import EventCard from "@/components/EventCard";
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
      <EventDetail data={data} />
      <br />
      <p className="my-4 text-4xl">More Event</p>

      <div className="flex flex-col gap-x-1.5 items-center md:flex-row container-fluid w-dvw">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </>
  );
}
