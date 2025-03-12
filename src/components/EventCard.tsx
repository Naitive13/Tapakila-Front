export default function EventCard() {
  return (
    <>
      <div className="w-96 shadow-sm card bg-base-100">
        <figure>
          <img src="https://placehold.co/400x300" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="justify-end card-actions">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
