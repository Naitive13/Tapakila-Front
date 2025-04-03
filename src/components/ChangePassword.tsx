interface ChangePasswordProps {
  action: (formData: FormData) => Promise<void>;
  defaultValues: {
    username: string;
    email: string;
    userId: string;
  };
}

export default function ChangePassword({
  action,
  defaultValues,
}: ChangePasswordProps) {
  return (
    <dialog id="changePassword" className="modal">
      <div className="modal-box">
        <div className="mt-5 w-full sm:mt-8">
          <div className="flex flex-col gap-5 mx-auto w-full sm:max-w-md md:max-w-lg">
            <form action={action}>
              <input
                type="hidden"
                name="username"
                value={defaultValues.username}
              />
              <input type="hidden" name="email" value={defaultValues.email} />
              <input type="hidden" name="userId" value={defaultValues.userId} />
              <fieldset className="fieldset">
                <legend className="fieldset-legend">New Password</legend>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full opacity-60 text-base-content input placeholder:text-base-300"
                  name="newPassword"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Confirm Password</legend>
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  className="w-full opacity-60 text-base-content input placeholder:text-base-300"
                  name="confirmPassword"
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
