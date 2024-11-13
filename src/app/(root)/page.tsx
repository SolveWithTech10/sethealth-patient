import MultiSearchBar from "@/components/MultiSearchBar";
import ServicesTypeSection from "@/components/ServicesTypeSection";
import { servicesType } from "@/constant";
import Image from "next/image";
import doctorVideoCall from "@/assets/doctor-videocall.avif";

export default function Home() {
  return (
    <div className="w-full h-full">
      <section className="w-full pt-[5rem] mb-[16rem] relative h-[calc(100dvh+10rem)] bg-[url('@/assets/blue-layer.avif')] bg-center bg-cover z-0">
        <header className="w-full mt-10">
          <h2 className="text-center text-5xl font-bold">
            Free Doctor Consultation
          </h2>
          <p className="text-center mt-8">
            24/7 Video consultation, Home visit, Clink services <br /> Starts
            your good healt journey now.
          </p>
        </header>
        <MultiSearchBar />
        <ServicesTypeSection servicesTypeList={servicesType} />
        <div className="w-[560px] h-[380px] bg-white absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center rounded-3xl shadow-md">
        <Image src={doctorVideoCall} alt="doctor in video call" width={540} height={310} className="rounded-3xl"/>
        </div>
      </section>
      
      {/* brief services */}
      <section className="w-full">
        <h3 className="text-4xl font-semibold capitalize text-center">
          Consult top doctors online for <br/> any health concern
        </h3>
      </section>
    </div>
  );
}
