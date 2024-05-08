import { create } from "zustand";
import { eventType } from "../../../assets/data/formOptionsData";

type eventFormType = {
  first_name: string;
  surname: string;
  company_name: string;
  email: string;
  mobile_number: string;
  sum_insured: string;
  event_date: string;
  event_duration: string;
  event_involvement: string;
  event_type: string;
  event_location: string;
  no_of_guests: string;
  cover_type: string[];
};

interface IEventFormType {
  eventFormData: eventFormType;
  setEventFormData: (eventFormData: eventFormType) => void;
}

export const useEventForm = create<IEventFormType>()((set) => ({
  eventFormData: {
    first_name: "",
    surname: "",
    company_name: "",
    email: "",
    mobile_number: "",
    sum_insured: "",
    event_date: "",
    event_duration: "",
    event_involvement: "",
    event_type: "",
    event_location: "",
    no_of_guests: "",
    cover_type: [],
  },
  setEventFormData: (eventFormData) => set({ eventFormData: eventFormData }),
}));
