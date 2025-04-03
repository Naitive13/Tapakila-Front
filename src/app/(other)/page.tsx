"use client";
import CarouselCard from "@/components/CarouselCard";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import useSWR from "swr";
import { getData } from "@/lib/fetcher";
import Loading from "@/components/Loading";

export default function Home() {
  const { data, error, isLoading } = useSWR(`api/event`, getData);
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  const carouselEvent = data.slice(0, 3);
  return (
    <>
      <div className="overflow-hidden w-full max-h-full carousel h-[50dvh]">
        {carouselEvent.map((event, index: number) => (
          <CarouselCard key={index} id={index + 1} poster={event.eventPoster} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <div className="flex justify-center container-fluid">
        <p className="text-4xl">Concert</p>
      </div>
      <br />
      <div className="flex flex-col gap-x-1.5 items-center md:flex-row container-fluid w-dvw">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

      <br />
      <br />
      <br />
      <div className="flex justify-center container-fluid">
        <p className="text-4xl">Spectacle</p>
      </div>
      <br />
      <div className="flex flex-col gap-x-1.5 items-center md:flex-row container-fluid w-dvw">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
