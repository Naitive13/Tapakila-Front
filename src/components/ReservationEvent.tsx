interface ReservationEventProps {
  data: {
    title: string;
    eventType: string;
    date: string;
  };
}

export default function ReservationEvent({ data }: ReservationEventProps) {
  return (
    <>
      <ul className="gap-y-4 max-w-full list">
        <li className="list-col-grow">
          <div>
            <h2 className="text-xl font-semibold">Event Title</h2>
            <p className="opacity-60 text-md">{data.title}</p>
          </div>
        </li>
        <li className="list-col-grow">
          <div>
            <h2 className="text-xl font-semibold">Event Type</h2>
            <p className="opacity-60 text-md">{data.eventType}</p>
          </div>
        </li>
        <li className="list-col-grow">
          <div>
            <h2 className="text-xl font-semibold">Event Date</h2>
            <p className="opacity-60 text-md">
              {new Date(data.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}
