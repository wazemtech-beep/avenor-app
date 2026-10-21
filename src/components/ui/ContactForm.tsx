"use client";
import type { FormHTMLAttributes } from "react";
export default function ContactForm(
  props: FormHTMLAttributes<HTMLFormElement>,
) {
  return (
    <form
      {...props}
      onSubmit={(event) => {
        event.preventDefault();
        event.currentTarget.reportValidity();
      }}
    />
  );
}
