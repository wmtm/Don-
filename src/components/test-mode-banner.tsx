import { TEST_MODE } from "@/lib/config";

export function TestModeBanner({ text }: { text: string }) {
  if (!TEST_MODE) return null;
  return (
    <div role="status" className="bg-gold-500 px-4 py-1.5 text-center text-sm font-semibold text-ink-900">
      {text}
    </div>
  );
}
