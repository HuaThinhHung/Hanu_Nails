import { HeroLivingHand } from "@/components/home/HeroLivingHand";
import { Hand360Banner } from "@/components/home/Hand360Banner";
import { LatestNailWorks } from "@/components/home/LatestNailWorks";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { BookingCTA } from "@/components/home/BookingCTA";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-soft-white">
      <HeroLivingHand />
      <Hand360Banner />
      <LatestNailWorks />
      <FeaturedCollections />
      <BookingCTA />
    </div>
  );
}
