"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import DemoModal, { emptyForm } from "./DemoModal";

const DemoRequestContext = createContext(null);

export function DemoRequestProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openDemoModal = useCallback(() => setIsModalOpen(true), []);
  const closeDemoModal = useCallback(() => setIsModalOpen(false), []);

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

  const value = useMemo(() => ({ openDemoModal }), [openDemoModal]);

  return (
    <DemoRequestContext.Provider value={value}>
      {children}
      <DemoModal
        open={isModalOpen}
        onClose={closeDemoModal}
        formData={formData}
        onFormChange={onFormChange}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </DemoRequestContext.Provider>
  );
}

export function useDemoRequest() {
  const ctx = useContext(DemoRequestContext);
  if (!ctx) {
    throw new Error("useDemoRequest must be used within DemoRequestProvider");
  }
  return ctx;
}
