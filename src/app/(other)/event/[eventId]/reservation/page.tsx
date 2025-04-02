"use client";
import Loading from "@/components/Loading";
import ReservationEvent from "@/components/ReservationEvent";
import { getData } from "@/lib/fetcher";
import { use, useRef } from "react";
import useSWR from "swr";
import { submit } from "./action";
import useReservationInfoStore from "@/lib/reservationStore";

type Params = {
  params: Promise<{ eventId: string }>;
};
export default function ReservationPage({ params }: Params) {
  const { eventId } = use(params);
  const { data, error, isLoading } = useSWR(`/api/event/${eventId}`, getData);
  const ref = useRef<HTMLFormElement>(null);

  const { ticketType, ticketAmount, setTicketType, setTicketAmount } =
    useReservationInfoStore();

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div> Error loading event data</div>;
  }
  return (
    <>
      <div className="flex overflow-hidden flex-col max-w-full h-full shadow-md md:flex-row w-dvw shrink max-h-fit md:max-h-[65dvh]">
        <div className="flex overflow-hidden justify-center items-center min-w-5/12">
          <img
            src={data.eventPoster}
            alt="poster"
            className="self-center size-max"
          />
        </div>
        <div className="flex flex-col p-4 min-w-8/12">
          <h2 className="mb-2.5 text-3xl font-semibold md:text-4xl">
            Make Your Reservation Now !
          </h2>
          <ReservationEvent data={data} />
          <form
            action={async (formData) => {
              submit(formData);
              ref.current?.reset();
            }}
            ref={ref}
            onReset={() => {
              setTicketAmount("1");
              setTicketType("Regular");
            }}
          >
            <fieldset className="my-4 fieldset">
              <legend className="text-xl fieldset-legend">Ticket Type</legend>
              <input
                name="ticketType"
                type="hidden"
                defaultValue={ticketType}
              />
              <input
                name="ticketAmount"
                type="hidden"
                defaultValue={ticketAmount}
              />
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
            <fieldset className="fieldset">
              <legend className="text-xl fieldset-legend">Ticket Amount</legend>
              <select
                defaultValue="1"
                className="w-2/5 opacity-60 select select-secondary"
                onChange={(e) => setTicketAmount(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </fieldset>
            <button className="mt-4 w-2/12 btn btn-soft btn-primary">
              Confirm
            </button>
            <button
              type="button"
              className="mt-4 ml-16 w-2/12 btn btn-soft btn-error"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
