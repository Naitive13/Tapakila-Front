import CarouselCard from "@/components/CarouselCard";

export default function Home() {
  return (
    <div className="w-full carousel">
      <CarouselCard id={1} />
      <CarouselCard id={2} />
      <CarouselCard id={3} />
      <CarouselCard id={4} />
    </div>
  );
}
