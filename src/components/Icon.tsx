import Image from "next/image";

export function Icon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className=" hover:bg-[#ececec]  opacity-60 p-2.5 rounded-lg ">
      <Image src={src} width={24} height={24} alt={alt} />
    </div>
  );
}
