import { Button, ButtonProps } from 'antd';
import styles from './Button.module.css';

export default ({ className, children, ...rest }: ButtonProps) => (
  <Button className={`${styles.button} ${className || ''}`} {...rest}>
    {children}
  </Button>
);
