import React from 'react';

export function Separator(props: React.HTMLAttributes<HTMLHRElement>) {
  return <hr {...props} className={props.className || 'my-4 border-t border-gray-300'} />;
}
