import { HeroLivingHand } from "@/components/home/HeroLivingHand";
import { Hand360Banner } from "@/components/home/Hand360Banner";
import { TrustBar } from "@/components/home/TrustBar";
import { LatestNailWorks } from "@/components/home/LatestNailWorks";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { BookingProcess } from "@/components/home/BookingProcess";
import { BookingCTA } from "@/components/home/BookingCTA";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-soft-white">
      <HeroLivingHand />
      <TrustBar />
      <LatestNailWorks />
      <FeaturedCollections />
      <Hand360Banner />
      <BookingProcess />
      <BookingCTA />
    </div>
  );
}
