# Form Components

A complete, reusable form component system built with React best practices, mobile-first design, and full TypeScript support.

## Features

✅ **Compositional API** - Mix and match components for maximum flexibility  
✅ **Mobile-First** - Optimized for mobile devices with responsive design  
✅ **Fully Typed** - Complete TypeScript support  
✅ **Accessible** - Proper ARIA attributes and semantic HTML  
✅ **Controlled Components** - Full React state control  
✅ **Consistent Styling** - Matches shadcn design system  
✅ **Validation Ready** - Works with any validation approach

## Quick Start

```tsx
"use client";

import { useState } from "react";
import Form, {
  Field,
  FieldSet,
  FieldLabel,
  Input,
} from "@/components/ui/Form/Form";

export default function MyForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Email:", email);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </Field>
        <button type="submit">Submit</button>
      </FieldSet>
    </Form>
  );
}
```

## Components

### Form

Main form wrapper that handles submission and prevents default behavior.

**Props:**

- `onSubmit: (e: React.FormEvent<HTMLFormElement>) => void` - Submit handler
- `children: React.ReactNode` - Form content
- `className?: string` - Optional additional classes
- All other standard `<form>` props

### Input Components

#### Input

Standard text input supporting all HTML input types.

```tsx
<Input
  type="text" // or "email", "password", "number", etc.
  value={value}
  onChange={handleChange}
  placeholder="Enter text..."
/>
```

#### Textarea

Multi-line text input with auto-resize capability.

```tsx
<Textarea
  value={value}
  onChange={handleChange}
  placeholder="Enter message..."
  rows={5}
/>
```

#### Select

Native dropdown select for better mobile UX.

```tsx
<Select value={value} onChange={handleChange}>
  <option value="">Choose...</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
```

#### Checkbox

Styled checkbox input.

```tsx
<Checkbox
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
```

#### Radio

Styled radio button input.

```tsx
<Radio
  name="group"
  value="option1"
  checked={selected === "option1"}
  onChange={(e) => setSelected(e.target.value)}
/>
```

### Field Components

#### Field

Container for individual form fields with layout options.

**Props:**

- `orientation?: "vertical" | "horizontal" | "responsive"` - Layout direction
- Default: `"vertical"`

```tsx
<Field orientation="horizontal">{/* Field content */}</Field>
```

#### FieldSet

Groups related fields together.

```tsx
<FieldSet>
  <FieldLegend>Personal Information</FieldLegend>
  <Field>{/* ... */}</Field>
  <Field>{/* ... */}</Field>
</FieldSet>
```

#### FieldGroup

Groups multiple fields (especially useful for checkboxes/radios).

```tsx
<FieldGroup>
  <Field>{/* ... */}</Field>
  <Field>{/* ... */}</Field>
</FieldGroup>
```

#### FieldLabel

Accessible label for inputs.

```tsx
<FieldLabel htmlFor="input-id">Label Text</FieldLabel>
```

#### FieldDescription

Helper text for fields.

```tsx
<FieldDescription>This is some helpful information.</FieldDescription>
```

#### FieldError

Error message display.

```tsx
<FieldError>{errorMessage}</FieldError>
```

## Examples

### Complete Contact Form

See `ContactFormExample.tsx` for a full working example with:

- Text and email inputs
- Select dropdown
- Textarea
- Validation
- Error handling
- Loading states
- Success message

### Checkbox Group

```tsx
<FieldGroup>
  <Field orientation="horizontal">
    <Checkbox id="opt1" checked={opt1} onChange={handleOpt1} />
    <FieldLabel htmlFor="opt1">Option 1</FieldLabel>
  </Field>
  <Field orientation="horizontal">
    <Checkbox id="opt2" checked={opt2} onChange={handleOpt2} />
    <FieldLabel htmlFor="opt2">Option 2</FieldLabel>
  </Field>
</FieldGroup>
```

### Radio Group

```tsx
<FieldSet>
  <FieldLegend>Choose an option</FieldLegend>
  <FieldGroup>
    <Field orientation="horizontal">
      <Radio
        id="a"
        name="choice"
        value="a"
        checked={choice === "a"}
        onChange={handleChange}
      />
      <FieldLabel htmlFor="a">Option A</FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <Radio
        id="b"
        name="choice"
        value="b"
        checked={choice === "b"}
        onChange={handleChange}
      />
      <FieldLabel htmlFor="b">Option B</FieldLabel>
    </Field>
  </FieldGroup>
</FieldSet>
```

## Best Practices

1. **Always connect labels to inputs** using `htmlFor` and `id` for accessibility
2. **Use controlled components** with `value` and `onChange` props
3. **Handle validation separately** - components are presentation-only
4. **Set `aria-invalid`** on inputs when showing errors
5. **Use semantic HTML** - proper form structure improves accessibility
6. **Test on mobile devices** - native inputs provide better UX on mobile
7. **Use `orientation="horizontal"`** for checkbox/radio layouts
8. **Group related fields** with FieldSet and FieldGroup

## File Structure

```
src/components/ui/
├── Form/
│   ├── Form.tsx              # Main form wrapper + exports
│   ├── ContactFormExample.tsx # Complete working example
│   └── README.md             # This file
└── base/
    ├── field.tsx             # Field layout components
    ├── input.tsx             # Text input
    ├── textarea.tsx          # Multi-line input
    ├── select.tsx            # Dropdown select
    ├── checkbox.tsx          # Checkbox input
    └── radio.tsx             # Radio button
```

## Validation

This component system is intentionally validation-agnostic. You can use any validation approach:

- **Built-in HTML5 validation** - Use `required`, `pattern`, etc.
- **Manual validation** - Check values in `onSubmit` handler
- **React Hook Form** - Works seamlessly with `ref` forwarding
- **Formik** - Compatible with controlled component pattern
- **Zod/Yup** - Use for schema validation

Example with manual validation:

```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  const errors: Record<string, string> = {};

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Invalid email format";
  }

  if (Object.keys(errors).length > 0) {
    setErrors(errors);
    return;
  }

  // Submit form
};
```

## Styling

All components use Tailwind CSS with the shadcn design system. They support:

- Focus states with ring effects
- Validation states (`aria-invalid`)
- Disabled states
- Dark mode
- Responsive design

To customize, pass `className` prop to any component.

## TypeScript

All components are fully typed with TypeScript. They extend native HTML element props:

```tsx
Input extends React.ComponentProps<"input">
Textarea extends React.ComponentProps<"textarea">
Select extends React.ComponentProps<"select">
Checkbox extends React.ComponentProps<"input">
Radio extends React.ComponentProps<"input">
```
