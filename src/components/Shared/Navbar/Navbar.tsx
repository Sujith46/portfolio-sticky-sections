import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="px-10 py-6 flex items-center justify-between">
      <div className="logo tracking-tight font-semibold">SUJITH</div>
      <div className="menu-items flex items-center gap-6 tracking-tight font-semibold">
        <Link href={"/"}>Work</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
      </div>
    </nav>
  );
};
