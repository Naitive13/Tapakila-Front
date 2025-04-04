export async function submit(formData: FormData) {
  console.log(formData);
  const body = {
    ticketType: formData.get("ticketType"),
    event_id: formData.get("eventId"),
    reservationDate: new Date().toISOString(),
  };

  const postRequest = await fetch("/api/reservation", {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (postRequest.status == 200) {
    alert("reservation successful");
  } else {
    if (postRequest.status == 404) {
      alert("No more available ticket");
    }
  }
}
