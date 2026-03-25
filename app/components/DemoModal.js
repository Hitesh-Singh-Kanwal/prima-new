"use client";

import { useEffect, useId } from "react";

const emptyForm = { name: "", email: "", company: "" };

export default function DemoModal({
  open,
  onClose,
  formData,
  onFormChange,
  onSubmit,
  isSubmitting,
}) {
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="demo-modal-root"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="demo-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="demo-modal-header">
          <div className="demo-modal-header-text">
            <p className="demo-modal-eyebrow">Partner brief</p>
            <h2 id={titleId} className="demo-modal-title">
              Schedule a <em>demo</em>
            </h2>
            <p className="demo-modal-subtitle">
              Tell us who you are — we’ll get back within one business day.
            </p>
          </div>
          <button
            type="button"
            className="demo-modal-close"
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <form className="demo-modal-form" onSubmit={onSubmit} noValidate>
          <label className="demo-modal-field">
            <span className="demo-modal-label">Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={(e) => onFormChange("name", e.target.value)}
              required
              disabled={isSubmitting}
            />
          </label>
          <label className="demo-modal-field">
            <span className="demo-modal-label">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => onFormChange("email", e.target.value)}
              required
              disabled={isSubmitting}
            />
          </label>
          <label className="demo-modal-field">
            <span className="demo-modal-label">Company</span>
            <input
              type="text"
              name="company"
              autoComplete="organization"
              value={formData.company}
              onChange={(e) => onFormChange("company", e.target.value)}
              required
              disabled={isSubmitting}
            />
          </label>
          <div className="demo-modal-actions">
            <button
              type="button"
              className="demo-modal-cancel"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="demo-modal-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending…" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { emptyForm };
