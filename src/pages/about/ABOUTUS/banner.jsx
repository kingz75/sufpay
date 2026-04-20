import Abvideo from "../../../assets/back/abvideo.png";

export default function Banner() {
  return (
    <section className="bg-[#F9F9F9] px-4 py-6 sm:px-6 md:px-10 lg:px-[200px] lg:py-16">
      <div className="mx-auto max-w-[2000px]">
        <img
          src={Abvideo}
          alt="Sufpay highlight"
          className="w-full rounded-[30px] object-cover object-center"
        />
      </div>
    </section>
  );
}
