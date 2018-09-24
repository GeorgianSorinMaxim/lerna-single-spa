import * as singleSpa from 'single-spa';

export function hashPrefix(prefix) {
  return function(location) {
    return location.hash.startsWith(`#${prefix}`);
  };
}

export async function loadApp(name, hash, appURL) {
  singleSpa.registerApplication(
    name,
    () => SystemJS.import(appURL),
    hashPrefix(hash)
  );
}
