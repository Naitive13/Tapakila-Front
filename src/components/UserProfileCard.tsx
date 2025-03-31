type UserProfileCardProps = {
  info: {
    userId: string;
    userName: string;
    userEmail: string;
    creationDate: string;
    reservations: [];
  };
};
export default function UserProfileCard({ info }: UserProfileCardProps) {
  console.log(info);
  return (
    <>
      <ul className="min-h-full list rounded-box">
        <li className="p-4 pb-2 text-xs tracking-wide opacity-60">
          <h2 className="text-3xl">Your Profile</h2>
        </li>
        <li className="list-row">
          <div>
            <div className="text-lg text-base-content">UserID</div>
            <div className="text-xs font-semibold opacity-60">
              {info.userId}
            </div>
          </div>
        </li>

        <li className="list-row">
          <div>
            <div className="text-lg text-base-content">Username</div>
            <div className="text-xs font-semibold opacity-60">
              {info.userName}
            </div>
          </div>
        </li>
        <li className="list-row">
          <div>
            <div className="text-lg text-base-content">Email</div>
            <div className="text-xs font-semibold opacity-60">
              {info.userEmail}
            </div>
          </div>
        </li>
        <li className="list-row">
          <div>
            <div className="text-lg text-base-content">Creation Date</div>
            <div className="text-xs font-semibold opacity-60">
              {new Date(info.creationDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </li>
        <li className="px-1 list-row">
          <button
            className="btn btn-soft btn-primary"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Edit Info
          </button>
          <button
            className="btn btn-soft btn-secondary"
            onClick={() =>
              document.getElementById("changePassword").showModal()
            }
          >
            Change Password
          </button>
        </li>
      </ul>
    </>
  );
}
