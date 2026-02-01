import React from 'react';

export function Label({ children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className={props.className || 'block mb-1 font-medium'}>{children}</label>;
}
