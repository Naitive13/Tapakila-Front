import useReservationInfoStore from "@/lib/reservationStore";
import Link from "next/link";
import { RefObject } from "react";

interface ReservationFormProps {
  action: (formdata: FormData) => void;
  ref: RefObject<HTMLFormElement | null>;
  eventId: string;
}

export default function ReservationForm({
  action,
  ref,
  eventId,
}: ReservationFormProps) {
  const { ticketType, setTicketType } = useReservationInfoStore();

  return (
    <>
      <form
        action={async (formData) => {
          action(formData);
          ref.current?.reset();
        }}
        ref={ref}
        onReset={() => {
          setTicketType("Regular");
        }}
      >
        <fieldset className="my-4 fieldset">
          <legend className="text-xl font-normal fieldset-legend">
            Ticket Type
          </legend>
          <input name="ticketType" type="hidden" defaultValue={ticketType} />
          <input name="eventId" type="hidden" defaultValue={eventId} />
          <select
            defaultValue="Regular"
            className="w-2/5 opacity-60 select select-secondary"
            onChange={(e) => setTicketType(e.target.value)}
          >
            <option>Regular</option>
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
            <option>VIP</option>
          </select>
        </fieldset>
        <button className="mt-4 w-2/12 btn btn-soft btn-primary">
          Confirm
        </button>
        <Link href={`/event/${eventId}`}>
          <button
            type="button"
            className="mt-4 ml-16 w-2/12 btn btn-soft btn-secondary"
          >
            Cancel
          </button>
        </Link>
      </form>
    </>
  );
}
