export default function UserPage() {
  return (
    <div className="flex gap-1 justify-center items-center py-5 px-5 min-w-full bg-base-200">
      <div className="flex justify-between items-stretch py-5 px-5 w-3/12 rounded-md shadow-md xl:px-5 bg-base-100 item-center">
        <ul className="list rounded-box">
          <li className="p-4 pb-2 text-xs tracking-wide opacity-60">
            <h2 className="text-3xl">Your Profile</h2>
          </li>

          <li className="list-row">
            <div>
              <div className="text-lg text-base-content">Full Name</div>
              <div className="text-xs font-semibold opacity-60">John Doe</div>
            </div>
          </li>
          <li className="list-row">
            <div>
              <div className="text-lg text-base-content">Username</div>
              <div className="text-xs font-semibold opacity-60">Naitive13</div>
            </div>
          </li>
          <li className="list-row">
            <div>
              <div className="text-lg text-base-content">Email</div>
              <div className="text-xs font-semibold opacity-60">
                example@email.com
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-stretch py-5 px-5 w-5/12 rounded-md xl:px-5 bg-base-200"></div>
      <div className="flex justify-between items-stretch py-5 px-5 w-4/12 rounded-md xl:px-5 bg-base-200"></div>
    </div>
  );
}
