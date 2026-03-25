import Image from "next/image";

export default function DiagramSection() {
  return (
    <section className="diagram-section" aria-labelledby="diagram-heading">
      <h2 id="diagram-heading" className="sr-only">
        Infrastructure diagram
      </h2>
      <Image
        src="/images/Image%201.svg"
        alt="PrimaLabs one-pager diagram"
        width={454}
        height={375}
        className="w-full h-auto diagram-image"
        priority
      />
    </section>
  );
}
