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
    username: formData.get("username"),
    email: formData.get("email"),
    userId: formData.get("userId"),
    newPassword: formData.get("newPassword"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    alert("Password changed successfully");
  } else {
    if (response.status === 400) {
      alert("Passwords don't match");
    } else {
      alert("Failed to change password");
    }
  }
}
