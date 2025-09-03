import React from "react";
import { Mic } from "lucide-react";


// Default Input
export function DefaultInput({ value, onChange, placeholder = "Enter text here..." }) {
  return (
    <input
      type="text"
      className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

// Dropdown Input
export function DropdownInput({ value, onChange, options = [], placeholder = "Select gender..." }) {
  return (
    <select
      className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={onChange}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

// Voice Input (with icon)
export function VoiceInput({ value, onChange, placeholder = "Speak or type symptoms...", onMicClick }) {
  return (
    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full focus-within:ring-2 focus-within:ring-primary">
      <input
        type="text"
        className="flex-1 outline-none"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button
        type="button"
        className="ml-2 hover:text-primary"
        onClick={onMicClick}
        aria-label="Start voice input"
      >
        {/* Simple mic icon (SVG) */}
        {<Mic color="neutral-dark" />}
      </button>
    </div>
  );
}

// Error State Input
export function ErrorInput({
  value,
  onChange,
  placeholder = "Invalid input...",
  error = "This field is required"
}) {
  return (
    <div>
      <input
        type="text"
        className="border border-red-500 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid="true"
      />
      <p className="text-red-500 text-sm mt-1">{error}</p>
    </div>
  );
}