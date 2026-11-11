import { registerApplication } from 'single-spa';

export const hashPrefix = (prefix) => (location) =>
  location.hash.startsWith(`#${prefix}`);

export function loadApp(name, hash, appURL) {
  registerApplication({
    name,
    app: () => System.import(appURL),
    activeWhen: hashPrefix(hash)
  });
}
