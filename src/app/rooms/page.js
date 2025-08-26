import ContactFooter from "@/components/ContactFooter";
import Footer from "@/components/CopyrightFooter";
import MapSection from "@/components/MapSection";
import Rooms from "@/components/Rooms";
import RoomsHeader from "@/components/RoomsHeader";

export default function RoomsPage() {
  return (
    <>
      <RoomsHeader />
      <Rooms />
      <MapSection />
      <ContactFooter />
      <Footer />
    </>
  );
}
