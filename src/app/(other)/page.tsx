"use client";
import useSWR from "swr";
import { getData } from "@/lib/fetcher";
import Loading from "@/components/Loading";
import HeroSection from "@/components/HeroSection";
import EventList from "@/components/EventList";

export default function Home() {
  const { data, error, isLoading } = useSWR("api/event", getData);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>failed</div>;
  }
  console.log(data);
  const concert = data.filter((event) => event.eventType === "CONCERT");
  const festival = data.filter((event) => event.eventType === "FESTIVAL");
  const theater = data.filter((event) => event.eventType === "THEATER");
  const sport = data.filter((event) => event.eventType === "SPORT");
  const comedy = data.filter((event) => event.eventType === "COMEDY");
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="overflow-hidden w-full max-h-full carousel h-[90dvh] bg-primary">
        <HeroSection />
      </div>
      <EventList list={concert} title="Concert" />
      <EventList list={festival} title="Festival" />
      <EventList list={theater} title="Theater" />
      <EventList list={sport} title="Sport" />
      <EventList list={comedy} title="Comedy" />
    </>
  );
}
