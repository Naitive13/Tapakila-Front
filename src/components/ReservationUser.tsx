export default function ReservationUser() {
  return (
    <li className="min-w-full border border-gray-100 shadow-sm 4 card bg-base-100 card-md">
      <div className="card-body">
        <h2 className="text-xl text-base-content">Event Name</h2>
        <p className="opacity-60">Event Summary</p>
        <div className="justify-end card-actions">
          <button className="btn btn-soft btn-primary">See More</button>
          <button className="btn btn-soft btn-error">Cancel Reservation</button>
        </div>
      </div>
    </li>
  );
}
