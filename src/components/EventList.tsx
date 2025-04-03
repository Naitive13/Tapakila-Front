import EventItem from "./Eventitem";

interface EventListProps {
  list: {
    eventPoster: string;
    eventTitle: string;
    eventDate: string;
  }[];
  title: string;
}
export default function EventList({ list, title }: EventListProps) {
  return (
    <ul className="shadow-md list bg-base-100 rounded-box">
      <li className="p-4 pb-2 text-2xl tracking-wide opacity-60">{title}</li>
      {list.length == 0 ? (
        <li className="list-row">No event Yet</li>
      ) : (
        list.map((event, index) => <EventItem event={event} key={index} />)
      )}
    </ul>
  );
}
