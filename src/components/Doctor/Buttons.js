import React from 'react'
import { Button } from '@mui/material';

export default function Buttons({ value, ...rest}) {
  return <Button {...rest}>{value}</Button>;
}
