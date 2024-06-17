import React from 'react';
import { BaseToast, ErrorToast } from 'react-native-toast-message';

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green',zIndex: 10000 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 14,
        fontWeight: '400'
      }}
      text2Style={{
        fontSize: 16,
        fontWeight: '300'
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red',zIndex: 10000 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: '400'
      }}
      text2Style={{
        fontSize: 16,
        fontWeight: '300'
      }}
    />
  ),
  // You can add other custom types here
};

export default toastConfig;
