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
  const [isSuccess, setIsSuccess] = useState(false);

  const openDemoModal = useCallback(() => {
    setIsModalOpen(true);
    setIsSuccess(false);
  }, []);
  const closeDemoModal = useCallback(() => {
    setIsModalOpen(false);
    setIsSuccess(false);
    setIsSubmitting(false);
    setFormData(emptyForm);
  }, []);

  const onFormChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        // Form isn't wired to Zapier yet; always show success for now.
        await new Promise((resolve) => setTimeout(resolve, 400));
        setIsSuccess(true);
      } catch (err) {
        console.error(err);
        setIsSuccess(true);
      } finally {
        setIsSubmitting(false);
      }
    },
    [],
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
        isSuccess={isSuccess}
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
