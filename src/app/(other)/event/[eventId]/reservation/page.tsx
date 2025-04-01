"use client";
import Loading from "@/components/Loading";
import { getData } from "@/lib/fetcher";
import { use } from "react";
import useSWR from "swr";

type Params = {
  params: Promise<{ eventId: string }>;
};
export default function ReservationPage({ params }: Params) {
  const { eventId } = use(params);
  const { data, error, isLoading } = useSWR(`/api/event/${eventId}`, getData);

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
        <div className="flex flex-col min-w-8/12">
          <form action="" className="p-4">
            <h2 className="mb-2.5 text-4xl font-semibold">
              Make Your Reservation Now
            </h2>
            <ul className="overflow-hidden gap-y-4 max-w-full list">
              <li className="list-col-grow">
                <div>
                  <h2 className="text-xl font-semibold">Event Title</h2>
                  <p className="opacity-60 text-md">{data.title}</p>
                </div>
              </li>
              <li className="list-col-grow">
                <div>
                  <h2 className="text-xl font-semibold">Event Type</h2>
                  <p className="opacity-60 text-md">{data.eventType}</p>
                </div>
              </li>
              <li className="list-col-grow">
                <div>
                  <h2 className="text-xl font-semibold">Event Date</h2>
                  <p className="opacity-60 text-md">
                    {new Date(data.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </li>
            </ul>
            <fieldset className="my-4 fieldset">
              <legend className="text-xl fieldset-legend">Ticket Type</legend>
              <select
                defaultValue="Regular"
                className="w-2/5 opacity-60 select select-secondary"
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
            <button className="mt-4 ml-16 w-2/12 btn btn-soft btn-error">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
