export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday, 1 = Monday, etc.

export interface AvailabilityConfig {
  // Days of the week the business is open
  workingDays: DayOfWeek[];
  
  // Available time slots (in HH:mm format)
  timeSlots: string[];
  
  // Specific dates when the business is closed (YYYY-MM-DD format)
  blockedDates: string[];
  
  // Date ranges when the business is closed (e.g. holidays)
  blockedRanges: {
    start: string; // YYYY-MM-DD
    end: string;   // YYYY-MM-DD
  }[];
}

export const availabilityConfig: AvailabilityConfig = {
  // Monday (1) to Friday (5)
  workingDays: [1, 2, 3, 4, 5],
  
  // Available slots for calls
  timeSlots: [
    "09:30",
    "10:30",
    "11:30",
    "14:30",
    "15:30",
    "16:30",
    "17:30"
  ],
  
  // Example of specific closed days
  blockedDates: [
    "2026-08-15", // Ferragosto
    "2026-12-25", // Natale
    "2026-12-26", // Santo Stefano
  ],
  
  // Example of a closed week
  blockedRanges: [
    {
      start: "2026-08-10",
      end: "2026-08-23" // Chiusura estiva
    },
    {
      start: "2026-12-24",
      end: "2027-01-06" // Pausa natalizia
    }
  ]
};
