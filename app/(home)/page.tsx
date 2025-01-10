import Banner from "@/components/banner";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <main className="overflow-hidden px-2 md:px-4 lg:px-8 flex flex-col items-center my-8 lg:my-12">
        <Banner />
      </main>
      <Footer />
    </>
  );
}
