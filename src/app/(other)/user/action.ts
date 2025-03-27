export function userInfoUpdate(formData: FormData) {
  const body = {
    username: formData.get("username"),
    email: formData.get("email"),
  };
  alert(`Username: ${body.username}, Email: ${body.email}`);
}

export function changePassword(formData: FormData) {
  const body = {
    newPassword: formData.get("newPassword"),
    confirmPassword: formData.get("confirmPassword"),
  };
  alert(
    `New Password: ${body.newPassword}, Confirm Password: ${body.confirmPassword}`,
  );
}
