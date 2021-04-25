import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";

interface IInputFormProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  IsInvalid?: boolean;
  fieldError: FieldError| undefined
}

const InputForm = forwardRef<HTMLInputElement, IInputFormProps>(
  (props, ref) => {
    const {
      className = "form-control form-control-lg",
      IsInvalid = false,
      fieldError = undefined,
      ...refProps
    } = props;

    return (
      <>
        <input
          ref={ref}
          className={`${className} ${IsInvalid ? "is-invalid" : ""}`}
          {...refProps}
        />
        <div className="invalid-feedback">{fieldError?.message}</div>
      </>
    );
  }
);

export default InputForm;
