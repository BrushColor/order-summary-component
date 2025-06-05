import { Button } from './Button';
import { PlanBox } from './PlanBox';

export function CardContent() {
  return (
    <div className="p-6 sm:p-10">
      <h1 className="font-red-hat-display pb-5 text-center text-2xl font-black">
        Order Summary
      </h1>
      <p className="font-red-hat-display text-neutral-blue-300 pb-5 text-center">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <PlanBox />

      <div className="flex flex-col gap-4 pt-5">
        <Button variant="primary"> Proceed to Payment</Button>
        <Button variant="secondary">Cancel Order</Button>
      </div>
    </div>
  );
}
