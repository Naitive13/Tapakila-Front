export async function userInfoUpdate(formData: FormData) {
  const body = {
    username: formData.get("username"),
    email: formData.get("email"),
    userId: formData.get("userId"),
  };

  const response = await fetch("/api/user", {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    alert("User info updated successfully");
  } else {
    alert("Failed to update user info");
  }
}

export async function changePassword(formData: FormData) {
  const body = {
    newPassword: formData.get("newPassword"),
    confirmPassword: formData.get("confirmPassword"),
  };
}
