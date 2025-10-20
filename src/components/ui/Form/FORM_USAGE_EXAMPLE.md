# Form Component Usage Guide

This guide demonstrates how to use the reusable, mobile-first form components.

## Basic Usage

### Simple Contact Form

```tsx
"use client";

import { useState } from "react";
import Form, {
  Field,
  FieldSet,
  FieldLabel,
  FieldError,
  FieldDescription,
  Input,
  Textarea,
  Select,
} from "@/components/ui/Form/Form";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6">
      <FieldSet>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <FieldError>{errors.name}</FieldError>
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          <FieldDescription>
            We'll never share your email with anyone else.
          </FieldDescription>
          <FieldError>{errors.email}</FieldError>
        </Field>

        <Field>
          <FieldLabel htmlFor="subject">Subject</FieldLabel>
          <Select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </Select>
          <FieldError>{errors.subject}</FieldError>
        </Field>

        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            rows={5}
          />
          <FieldError>{errors.message}</FieldError>
        </Field>

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </FieldSet>
    </Form>
  );
}
```

## Checkbox Example

```tsx
"use client";

import { useState } from "react";
import Form, {
  Field,
  FieldSet,
  FieldLabel,
  FieldGroup,
  Checkbox,
} from "@/components/ui/Form/Form";

export default function PreferencesForm() {
  const [preferences, setPreferences] = useState({
    newsletter: false,
    notifications: false,
    marketing: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Preferences:", preferences);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              id="newsletter"
              name="newsletter"
              checked={preferences.newsletter}
              onChange={handleCheckboxChange}
            />
            <FieldLabel htmlFor="newsletter">
              Subscribe to newsletter
            </FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox
              id="notifications"
              name="notifications"
              checked={preferences.notifications}
              onChange={handleCheckboxChange}
            />
            <FieldLabel htmlFor="notifications">
              Enable notifications
            </FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox
              id="marketing"
              name="marketing"
              checked={preferences.marketing}
              onChange={handleCheckboxChange}
            />
            <FieldLabel htmlFor="marketing">
              Receive marketing emails
            </FieldLabel>
          </Field>
        </FieldGroup>

        <button
          type="submit"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Save Preferences
        </button>
      </FieldSet>
    </Form>
  );
}
```

## Radio Button Example

```tsx
"use client";

import { useState } from "react";
import Form, {
  Field,
  FieldSet,
  FieldLegend,
  FieldLabel,
  FieldGroup,
  Radio,
} from "@/components/ui/Form/Form";

export default function ShippingForm() {
  const [shippingMethod, setShippingMethod] = useState("standard");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Shipping method:", shippingMethod);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingMethod(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <FieldLegend>Choose Shipping Method</FieldLegend>

        <FieldGroup>
          <Field orientation="horizontal">
            <Radio
              id="standard"
              name="shipping"
              value="standard"
              checked={shippingMethod === "standard"}
              onChange={handleRadioChange}
            />
            <FieldLabel htmlFor="standard">
              Standard Shipping (5-7 days) - Free
            </FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Radio
              id="express"
              name="shipping"
              value="express"
              checked={shippingMethod === "express"}
              onChange={handleRadioChange}
            />
            <FieldLabel htmlFor="express">
              Express Shipping (2-3 days) - $10
            </FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Radio
              id="overnight"
              name="shipping"
              value="overnight"
              checked={shippingMethod === "overnight"}
              onChange={handleRadioChange}
            />
            <FieldLabel htmlFor="overnight">
              Overnight Shipping (1 day) - $25
            </FieldLabel>
          </Field>
        </FieldGroup>

        <button
          type="submit"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Continue to Payment
        </button>
      </FieldSet>
    </Form>
  );
}
```

## Available Components

### Form Components

- `Form` - Main form wrapper with built-in submit handling
- `FieldSet` - Groups related fields together
- `Field` - Individual field wrapper with layout options
- `FieldGroup` - Groups multiple fields (useful for checkboxes/radios)
- `FieldLabel` - Accessible label for inputs
- `FieldLegend` - Legend for fieldsets
- `FieldDescription` - Helpful text for fields
- `FieldError` - Error message display
- `FieldSeparator` - Visual separator between field groups

### Input Components

- `Input` - Text, email, password, number, etc.
- `Textarea` - Multi-line text input
- `Select` - Dropdown selection
- `Checkbox` - Checkbox input
- `Radio` - Radio button input

## Key Features

✅ **Mobile-First**: Responsive design optimized for mobile devices  
✅ **Compositional**: Mix and match components as needed  
✅ **Accessible**: Proper ARIA attributes and semantic HTML  
✅ **Controlled Components**: Full React state control  
✅ **Consistent Styling**: Matches your design system  
✅ **Validation Ready**: Works with any validation library  
✅ **TypeScript**: Full type safety

## Tips

1. **Always use `htmlFor` and `id`**: Connect labels to inputs for accessibility
2. **Use Field orientation**: Set `orientation="horizontal"` for checkboxes/radios
3. **Leverage FieldGroup**: Group related inputs for better spacing
4. **Error handling**: Pass errors to `FieldError` component or use `aria-invalid`
5. **Mobile testing**: Test on actual devices - native inputs work best on mobile
