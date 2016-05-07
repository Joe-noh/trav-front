declare var ENV: string;
declare var HMR: boolean;
declare var production: boolean;
declare var backendUrl: string;

interface GlobalEnvironment {
  ENV;
  HMR;
  production;
  backendUrl;
}
