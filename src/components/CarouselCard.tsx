type CarouselCardProps = {
  id: number;
  poster: string;
};
export default function CarouselCard(props: CarouselCardProps) {
  const previousId: number = props.id == 1 ? 3 : props.id - 1;
  const nextId: number = props.id == 3 ? 1 : props.id + 1;
  return (
    <>
      <div
        id={`slide${props.id}`}
        className="flex overflow-hidden relative w-full max-h-full carousel-item"
      >
        <div className="flex overflow-hidden justify-center items-center min-w-max">
          <img src={props.poster} alt="poster" className="" />
        </div>
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
