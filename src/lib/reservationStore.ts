import { create } from "zustand";

type ReservationData = {
  ticketType: string;
  setTicketType: (ticketType: string) => void;
};
const useReservationInfoStore = create<ReservationData>((set) => ({
  ticketType: "Regular",
  setTicketType: (newTicketType: string) => set({ ticketType: newTicketType }),
}));

export default useReservationInfoStore;
