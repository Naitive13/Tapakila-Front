type CarouselCardProps = {
  id: number;
};
export default function CarouselCard(props: CarouselCardProps) {
  const previousId: number = props.id == 1 ? 4 : props.id - 1;
  const nextId: number = props.id == 4 ? 1 : props.id + 1;
  return (
    <>
      <div id={`slide${props.id}`} className="relative w-full carousel-item">
        <img src="https://placehold.co/1440x400" className="w-full" />
        <div className="flex absolute right-5 left-5 top-1/2 justify-between transform -translate-y-1/2">
          <a href={`#slide${previousId}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${nextId}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </>
  );
}
