import Link from "next/link";

interface EventDetailProps {
  data: {
    eventPoster: string;
    title: string;
    date: string;
    eventType: string;
    availableTicket: number;
    totalTicket: number;
    description: string;
    eventId: string;
  };
}
export default function EventDetail({ data }: EventDetailProps) {
  return (
    <>
      <div className="flex overflow-hidden flex-col max-w-full h-full rounded-md border border-gray-100 shadow-md md:flex-row bg-base-100 w-dvw shrink max-h-fit md:max-h-[65dvh]">
        <div className="flex overflow-hidden justify-center items-center min-w-5/12">
          <img
            src={data.eventPoster}
            alt="poster"
            className="self-center size-max"
          />
        </div>
        <div className="flex flex-col p-10 min-w-8/12">
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
          </ul>
          <Link href={`/event/${data.eventId}/reservation`}>
            <button className="m-4 w-5/12 md:w-2/12 btn text-base-100 btn-primary">
              Find Ticket
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
