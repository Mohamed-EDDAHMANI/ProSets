import React from 'react';

export function Card({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={props.className || 'border rounded shadow p-4'}>{children}</div>;
}

export function CardHeader({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={props.className || 'mb-2 font-bold text-lg'}>{children}</div>;
}

export function CardTitle({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={props.className || 'text-xl font-semibold'}>{children}</div>;
}

export function CardDescription({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={props.className || 'text-gray-500 mb-2'}>{children}</div>;
}

export function CardContent({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={props.className || 'mt-2'}>{children}</div>;
}
