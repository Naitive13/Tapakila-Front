import { create } from "zustand";

type ReservationData = {
  ticketType: string;
  ticketAmount: string;
  setTicketType: (ticketType: string) => void;
  setTicketAmount: (ticketAmount: string) => void;
};
const useReservationInfoStore = create<ReservationData>((set) => ({
  ticketType: "Regular",
  ticketAmount: "1",
  setTicketType: (newTicketType: string) => set({ ticketType: newTicketType }),
  setTicketAmount: (newTicketAmount: string) =>
    set({ ticketAmount: newTicketAmount }),
}));

export default useReservationInfoStore;
