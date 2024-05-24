import React, { forwardRef } from 'react';
import { Stack } from 'expo-router';

const ForwardedStack = forwardRef((props, ref) => (
  <Stack {...props} ref={ref} />
));

export default ForwardedStack;
