import ContactFooter from "@/components/ContactFooter";
import Footer from "@/components/CopyrightFooter";
import GalleryHeader from "@/components/GalleryHeader";
import GalleryMain from "@/components/GalleryMain";
import MapSection from "@/components/MapSection";

export default function GalleryPage() {
  return (
    <>
      <GalleryHeader />
      <GalleryMain />
      <MapSection />
      <ContactFooter />
      <Footer />
    </>
  );
}
