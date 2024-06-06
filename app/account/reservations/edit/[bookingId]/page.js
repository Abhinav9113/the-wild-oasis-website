import UpdateReservationForm from "@/app/_components/UpdateReservationForm";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export const metadata = {
  title: "Reservations",
};

export default async function Page({ params }) {
  const { bookingId } = params;
  const {
    id: reservationId,
    observations,
    numGuests,
    cabinId,
  } = await getBooking(bookingId);

  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>
      <UpdateReservationForm
        bookingId={bookingId}
        observations={observations}
        numGuests={numGuests}
        maxCapacity={maxCapacity}
      />
    </div>
  );
}
