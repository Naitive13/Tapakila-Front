import useUserInfoStore from "@/lib/store";

type EditUserInfoProps = {
  defaultValues: {
    username: string;
    email: string;
  };
  action: (e: FormData) => void;
};
export default function EditUserInfo({
  defaultValues,
  action,
}: EditUserInfoProps) {
  const { setUsername, setEmail } = useUserInfoStore();
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <div className="mt-5 w-full sm:mt-8">
          <div className="flex flex-col gap-5 mx-auto w-full sm:max-w-md md:max-w-lg">
            <form action={action}>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Username</legend>
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  className="w-full opacity-60 text-base-content input placeholder:text-base-300"
                  name="username"
                  defaultValue={defaultValues.username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-full opacity-60 text-base-content input placeholder:text-base-300"
                  name="email"
                  defaultValue={defaultValues.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>
              <div className="flex flex-col gap-x-2 gap-y-2 justify-end max-w-full md:flex-row">
                <button
                  type="submit"
                  className="btn btn-soft btn-primary shrink"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
