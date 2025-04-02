export async function submit(formData: FormData) {
  console.log(formData);
  const body = {
    ticketType: formData.get("ticketType"),
    ticketAmount: formData.get("ticketAmount"),
    eventId: formData.get("eventId"),
  };

  const postRequest = await fetch("/api/reservation", {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (postRequest.status == 200) {
    const response = await postRequest.json();
    alert(response.message);
  } else {
    const response = await postRequest.json();
    alert(response.error);
  }
}
