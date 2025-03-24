type UserProfileCardProps = {
  info: {
    uuid: string;
    username: string;
    email: string;
    role: string;
    creationDate: string;
    reservations: [];
  };
};
export default function UserProfileCard({ info }: UserProfileCardProps) {
  return (
    <>
      <ul className="list rounded-box">
        <li className="p-4 pb-2 text-xs tracking-wide opacity-60">
          <h2 className="text-3xl">Your Profile</h2>
        </li>
        <li className="list-row">
          <div>
            <div className="text-lg text-base-content">UserID</div>
            <div className="text-xs font-semibold opacity-60">{info.uuid}</div>
          </div>
        </li>

        <li className="list-row">
          <div>
            <div className="text-lg text-base-content">Username</div>
            <div className="text-xs font-semibold opacity-60">
              {info.username}
            </div>
          </div>
        </li>
        <li className="list-row">
          <div>
            <div className="text-lg text-base-content">Email</div>
            <div className="text-xs font-semibold opacity-60">{info.email}</div>
          </div>
        </li>
        <li className="list-row">
          <div>
            <div className="text-lg text-base-content">Creation Date</div>
            <div className="text-xs font-semibold opacity-60">
              {info.creationDate}
            </div>
          </div>
        </li>
        <li className="px-1 list-row">
          <button className="btn btn-soft btn-primary">Edit Info</button>
          <button className="btn btn-soft btn-secondary">
            Change Password
          </button>
        </li>
      </ul>
    </>
  );
}
