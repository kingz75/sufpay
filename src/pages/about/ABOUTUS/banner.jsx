const bannerImage = "/back/proimage1.jpg";

export default function Banner() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1180px]">
        <img
          src={bannerImage}
          alt="Sufpay highlight"
          className="h-[240px] w-full rounded-[30px] object-cover object-center shadow-[0_18px_50px_rgba(0,0,0,0.1)] sm:h-[300px] lg:h-[340px]"
        />
      </div>
    </section>
  );
}
