interface EventDetailProps {
  data: {
    eventPoster: string;
    title: string;
    date: string;
    eventType: string;
    availableTicket: number;
    totalTicket: number;
    description: string;
  };
}
export default function EventDetail({ data }: EventDetailProps) {
  return (
    <>
      <div className="flex overflow-hidden flex-col max-w-full h-full shadow-md md:flex-row w-dvw shrink max-h-fit md:max-h-[65dvh]">
        <div className="flex overflow-hidden justify-center items-center min-w-5/12">
          <img
            src={data.eventPoster}
            alt="poster"
            className="self-center size-max"
          />
        </div>
        <div className="flex flex-col min-w-8/12">
          <ul className="overflow-hidden gap-y-6 p-4 max-w-full list">
            <li className="list-col-grow">
              <div>
                <h2 className="text-2xl">Event Title</h2>
                <p className="font-semibold opacity-60 text-md">{data.title}</p>
              </div>
            </li>
            <li className="list-col-grow">
              <div>
                <h2 className="text-2xl">Event Type</h2>
                <p className="font-semibold opacity-60 text-md">
                  {data.eventType}
                </p>
              </div>
            </li>
            <li className="list-col-grow">
              <div>
                <h2 className="text-2xl">Date</h2>
                <p className="font-semibold opacity-60 text-md">{data.date}</p>
              </div>
            </li>
            <li className="list-col-grow">
              <div>
                <h2 className="text-2xl">Available Ticket</h2>
                <p className="font-semibold opacity-60 text-md">
                  {`${data.availableTicket}/${data.totalTicket}`}
                </p>
              </div>
            </li>
            <li className="w-10/12 list-col-grow">
              <h2 className="text-2xl">Description</h2>
              <p className="font-semibold opacity-60 text-wrap text-md">
                {data.description}
              </p>
            </li>
          </ul>
          <button className="m-4 w-2/12 btn btn-primary">Find Ticket</button>
        </div>
      </div>
    </>
  );
}
