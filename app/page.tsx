import Container from "@/components/container";

export default function Home() {
  return (
    <Container className="px-4 md:px-[120px] lg:px-[240px] mx-auto relative min-h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[55%] lg:w-[40%]">
        <h1 className="text-3xl font-extrabold text-center mb-2">
          Selamat Datang di Aeroxee
        </h1>
        <p className="text-sm italic font-extralight text-center">
          Aeroxee adalah rumah bagi keseharian saya dan portfolio kreatif saya.
          Mari jelajahi cerita-cerita, foto, dan proyek-proyek terbaru yang saya
          bagikan.
        </p>
      </div>
    </Container>
  );
}
