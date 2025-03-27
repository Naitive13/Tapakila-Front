import useUserInfoStore from "@/lib/store";

type EditUserInfoProps = {
  defaultValues: {
    username: string;
    email: string;
  };
};
export default function EditUserInfo({ defaultValues }: EditUserInfoProps) {
  const { setUsername, setEmail } = useUserInfoStore();
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="mt-5 w-full sm:mt-8">
            <div className="flex flex-col gap-5 mx-auto w-full sm:max-w-md md:max-w-lg">
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
                  name="username"
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
                <form
                  method="dialog"
                  className="flex min-h-full min-w-1/12 xs:min-w-full shrink"
                >
                  <button className="min-w-full btn-soft btn-secondary btn">
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
