import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";

interface InputOTPWrapperProps {
  length: number;
  value: string;
  onChange: (otp: string) => void;
}

const InputOTPWrapper = ({ length, value, onChange }: InputOTPWrapperProps) => {
  const numGroups = Math.ceil(length / 3);

  return (
    <InputOTP maxLength={length} value={value} onChange={onChange}>
      {Array.from({ length: numGroups }).map((_, groupIndex) => (
        <React.Fragment key={`group-${groupIndex}`}>
          <InputOTPGroup key={`otp-group-${groupIndex}`}>
            {Array.from({ length: 3 })
              .map((_, i) => groupIndex * 3 + i)
              .filter((slotIndex) => slotIndex < length)
              .map((slotIndex) => (
                <InputOTPSlot key={`otp-slot-${slotIndex}`} index={slotIndex} />
              ))}
          </InputOTPGroup>
          {groupIndex < numGroups - 1 && (
            <InputOTPSeparator key={`separator-${groupIndex}`} />
          )}
        </React.Fragment>
      ))}
    </InputOTP>
  );
};

export default InputOTPWrapper;
