import CarouselCard from "@/components/CarouselCard";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-full carousel">
        <CarouselCard id={1} />
        <CarouselCard id={2} />
        <CarouselCard id={3} />
        <CarouselCard id={4} />
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
