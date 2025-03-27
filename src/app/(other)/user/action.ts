export default function userInfoUpdate(formData: FormData) {
  const body = {
    username: formData.get("username"),
    email: formData.get("email"),
  };
  alert(`Username: ${body.username}, Email: ${body.email}`);
}
