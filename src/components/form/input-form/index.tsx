import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from "react";

interface IInputFormProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  IsInvalid?: boolean;
}

const InputForm = forwardRef<HTMLInputElement, IInputFormProps>((props, ref) => {
  const {
    className = "form-control form-control-lg",
    IsInvalid = false,
    ...refProps
  } = props;

  return (
    <input
      ref={ref}
      className={`${className} ${IsInvalid ? "is-invalid" : ""}`}
      {...refProps}
    />
  );
});

export default InputForm;
