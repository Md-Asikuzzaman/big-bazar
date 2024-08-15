"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      height={0}
      width={120}
      alt="logo"
      src={"/img/logo-light.svg"}
      onClick={() => router.replace("/")}
      className="shrink-0"
    />
  );
};

export default Logo;
