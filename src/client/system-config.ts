const barrels: string[] = [
  'app',
  'app/directives/auth-router-outlet',
  'app/services/api',
  'app/services/auth',
  'app/services/storage',
  'app/services/trip',
  'app/components/main',
  'app/components/navigation',
  'app/components/signin',
  'app/components/trips',
  'app/components/trip-detail'
];

function createPackageConfig(barrelList: string[]): any {
  return barrelList.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
}


// Add your custom SystemJS configuration here.
export const config: any = {
  packages: Object.assign({
    // Add your custom SystemJS packages here.
  }, createPackageConfig(barrels))
};
