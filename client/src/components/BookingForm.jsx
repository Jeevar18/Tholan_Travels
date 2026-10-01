import { useState } from "react";
import { PACKAGES, VEHICLES } from "../data/siteData";

const initialForm = {
  name: "",
  phone: "",
  whatsapp: "",
  travelDate: "",
  returnDate: "",
  pickup: "",
  destination: "",
  passengers: "",
  vehicle: "",
  package: "",
  message: "",
};

const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,20}$/;

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentValue) => ({ ...currentValue, [name]: value }));
    setErrors((currentValue) => ({ ...currentValue, [name]: "" }));
    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const validateForm = () => {
    const nextErrors = {};
    const trimmedName = form.name.trim();
    const trimmedPhone = form.phone.trim();
    const trimmedPickup = form.pickup.trim();
    const trimmedDestination = form.destination.trim();

    if (!trimmedName) {
      nextErrors.name = "Name is required.";
    } else if (trimmedName.length < 2) {
      nextErrors.name = "Name must be at least 2 characters.";
    }

    if (!trimmedPhone) {
      nextErrors.phone = "Phone is required.";
    } else if (!phonePattern.test(trimmedPhone) || trimmedPhone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.travelDate) {
      nextErrors.travelDate = "Travel date is required.";
    } else {
      const travelDate = new Date(form.travelDate);
      if (Number.isNaN(travelDate.getTime())) {
        nextErrors.travelDate = "Please choose a valid travel date.";
      }
    }

    if (form.returnDate) {
      const travelDate = new Date(form.travelDate);
      const returnDate = new Date(form.returnDate);
      if (!Number.isNaN(travelDate.getTime()) && !Number.isNaN(returnDate.getTime()) && returnDate < travelDate) {
        nextErrors.returnDate = "Return date cannot be before travel date.";
      }
    }

    if (!trimmedPickup) {
      nextErrors.pickup = "Pickup location is required.";
    }

    if (!trimmedDestination) {
      nextErrors.destination = "Destination is required.";
    }

    if (!form.passengers || Number(form.passengers) < 1 || !Number.isInteger(Number(form.passengers))) {
      nextErrors.passengers = "Passengers must be a positive whole number.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: "Please correct the highlighted fields and try again.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const payload = {
        ...form,
        name: form.name.trim(),
        phone: form.phone.trim(),
        whatsapp: form.whatsapp.trim(),
        pickup: form.pickup.trim(),
        destination: form.destination.trim(),
        message: form.message.trim(),
        passengers: Number(form.passengers),
      };

      const response = await fetch("http://localhost:5000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit your enquiry right now.");
      }

      setStatus({
        type: "success",
        message: "Booking enquiry submitted successfully.",
      });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      const fallbackMessage =
        error.message === "Failed to fetch"
          ? "Unable to submit your enquiry right now. Please try again or call us directly."
          : error.message || "Unable to submit your enquiry right now. Please try again or call us directly.";

      setStatus({ type: "error", message: fallbackMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-panel">
      <div className="booking-header">
        <h3>Book Your Trip</h3>
        <p>Share your travel details and we’ll get back to you soon.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="name">
              Name <span className="required">*</span>
            </label>
            <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" aria-invalid={Boolean(errors.name)} />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="phone">
              Phone <span className="required">*</span>
            </label>
            <input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="98765 43210" aria-invalid={Boolean(errors.phone)} />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="whatsapp">WhatsApp</label>
            <input id="whatsapp" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="Optional" />
          </div>

          <div className="form-field">
            <label htmlFor="travelDate">
              Travel date <span className="required">*</span>
            </label>
            <input id="travelDate" name="travelDate" type="date" value={form.travelDate} onChange={handleChange} aria-invalid={Boolean(errors.travelDate)} />
            {errors.travelDate && <span className="field-error">{errors.travelDate}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="returnDate">Return date</label>
            <input id="returnDate" name="returnDate" type="date" value={form.returnDate} onChange={handleChange} aria-invalid={Boolean(errors.returnDate)} />
            {errors.returnDate && <span className="field-error">{errors.returnDate}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="passengers">
              Passengers <span className="required">*</span>
            </label>
            <input id="passengers" name="passengers" type="number" min="1" step="1" value={form.passengers} onChange={handleChange} placeholder="2" aria-invalid={Boolean(errors.passengers)} />
            {errors.passengers && <span className="field-error">{errors.passengers}</span>}
          </div>

          <div className="form-field full-width">
            <label htmlFor="pickup">
              Pickup <span className="required">*</span>
            </label>
            <input id="pickup" name="pickup" value={form.pickup} onChange={handleChange} placeholder="Pollachi" aria-invalid={Boolean(errors.pickup)} />
            {errors.pickup && <span className="field-error">{errors.pickup}</span>}
          </div>

          <div className="form-field full-width">
            <label htmlFor="destination">
              Destination <span className="required">*</span>
            </label>
            <input id="destination" name="destination" value={form.destination} onChange={handleChange} placeholder="Valparai" aria-invalid={Boolean(errors.destination)} />
            {errors.destination && <span className="field-error">{errors.destination}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="vehicle">Vehicle</label>
            <select id="vehicle" name="vehicle" value={form.vehicle} onChange={handleChange}>
              <option value="">Select vehicle</option>
              {VEHICLES.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.name}>
                  {vehicle.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="package">Package</label>
            <select id="package" name="package" value={form.package} onChange={handleChange}>
              <option value="">Select package</option>
              {PACKAGES.map((tourPackage) => (
                <option key={tourPackage.id} value={tourPackage.name}>
                  {tourPackage.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field full-width">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your trip requirements" />
          </div>
        </div>

        {status.message && (
          <div className={`form-status ${status.type}`} role="status" aria-live="polite">
            {status.message}
          </div>
        )}

        <div className="form-actions">
          <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}
