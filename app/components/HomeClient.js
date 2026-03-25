"use client";

import { useCallback, useState } from "react";
import DemoModal, { emptyForm } from "./DemoModal";
import DiagramSection from "./DiagramSection";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import PageShell from "./PageShell";
import SiteFooter from "./SiteFooter";
import WhoWeWorkWith from "./WhoWeWorkWith";

export default function HomeClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const onFormChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const res = await fetch("/api/demo-request", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || "Request failed");
        }
        setIsModalOpen(false);
        setFormData(emptyForm);
      } catch (err) {
        console.error(err);
        window.alert(
          err instanceof Error ? err.message : "Something went wrong. Try again.",
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData],
  );

  return (
    <>
      <PageShell onRequestDemo={openModal}>
        <Hero />
        <DiagramSection />
        <HowItWorks />
        <WhoWeWorkWith />
        <SiteFooter />
      </PageShell>
      <DemoModal
        open={isModalOpen}
        onClose={closeModal}
        formData={formData}
        onFormChange={onFormChange}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </>
  );
}
