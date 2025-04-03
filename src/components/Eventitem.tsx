interface EventItemProps {
  event: {
    eventPoster: string;
    eventTitle: string;
    eventDate: string;
  };
}
export default function EventItem({ event }: EventItemProps) {
  return (
    <>
      <li className="list-row">
        <div>
          <img className="size-10 rounded-box" src={event.eventPoster} />
        </div>
        <div>
          <div className="text-lg font-semibold">{event.eventTitle}</div>
          <div className="text-xs opacity-60">
            {new Date(event.eventDate).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
        <div>
          <button className="btn btn-secondary list-col-wrap">See More</button>
        </div>
      </li>
    </>
  );
}
