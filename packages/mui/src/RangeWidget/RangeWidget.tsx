import React from "react";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import { WidgetProps, rangeSpec } from "@rjsf/utils";

const RangeWidget = ({
  value,
  readonly,
  disabled,
  onBlur,
  onFocus,
  options,
  schema,
  onChange,
  required,
  label,
  id,
}: WidgetProps) => {
  const sliderProps = { value, label, id, name: id, ...rangeSpec(schema) };

  const _onChange = (_: any, value?: number | number[]) => {
    onChange(value ? options.emptyValue : value);
  };
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <>
      <FormLabel required={required} id={id}>
        {label}
      </FormLabel>
      <Slider
        disabled={disabled || readonly}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        valueLabelDisplay="auto"
        {...sliderProps}
      />
    </>
  );
};

export default RangeWidget;
