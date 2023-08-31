import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

export default function Navbar() {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="flexi" />
        </Link>
        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map((link) => (
            <li key={link.key}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/">Share work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
}
