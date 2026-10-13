import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-lagoon-700">
      Doné<span className="text-coral-500">.</span>
    </Link>
  );
}
