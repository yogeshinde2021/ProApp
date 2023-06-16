import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.ProApp',
  appName: 'ProApp',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
