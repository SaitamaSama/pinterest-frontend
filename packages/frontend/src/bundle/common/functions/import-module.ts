import { ComponentType, lazy } from "react";

export function importModule<T = ComponentType>(
  bundle: string,
  module?: string,
): Promise<{ default: T }> {
  return import(`../../${bundle}.tsx`).then((component) => {
    let key = module;

    // If no module is specified, try to use the component from file name
    if (!key) {
      const bundleSplit = bundle.split("/");
      const file = bundleSplit[bundleSplit.length - 1];
      key = file.charAt(0).toUpperCase() + file.slice(1);
    }
    return {
      default: component[key] as T,
    };
  });
}

export function lazyImportModule(bundle: string, module?: string) {
  return lazy(() => importModule(bundle, module));
}
