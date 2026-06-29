import { notFound } from "next/navigation";
import { buttons, getButton } from "@/registry/buttons";
import { ComponentPage } from "@/components/component-page/component-page";

export function generateStaticParams() {
  return buttons.map((b) => ({ id: b.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const button = getButton(id);
  if (!button) notFound();
  return <ComponentPage button={button} />;
}
