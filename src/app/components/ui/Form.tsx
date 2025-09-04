import * as React from 'react';
import { cn } from '@/lib/utils';

interface MyFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  className?: string,
  action?: string,
  method?: string,
  children?: string,
}

const Form: React.FC<MyFormProps> = ({ className, action, method, children }) => {
  return (
    <form action={action} method={method} className={cn("",className)}>
      {children}
      tess
    </form>
  )
}
export default Form;