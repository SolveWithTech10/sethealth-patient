import { ServiceTypeProptype } from "@/types";

export default function ServicesTypeSection({servicesTypeList}:{servicesTypeList:ServiceTypeProptype[]}) {
  return (
    <div className="mt-8 max-w-[35rem] w-full mx-auto">
      <h3 className="text-indigo-800 text-lg font-semibold mb-5">
        Are you looking for:
      </h3>
      <div className="w-full flex items-center justify-center gap-3">
        {servicesTypeList.map((service:ServiceTypeProptype) => (
          <ServicesTypeCard service={service} key={service.serviceTypeTitle} />
        ))}
      </div>
    </div>
  );
}


function ServicesTypeCard({ service }:{service:ServiceTypeProptype}) {
  return (
    <div
      className="px-5 py-3 rounded-lg bg-slate-50 shadow-md cursor-pointer"
    >
      <p className="font-bold text-lg">{service.serviceTypeTitle}</p>
      <p className="text-xs font-semibold text-slate-500">{service.subTitle}</p>
    </div>
  );
}
