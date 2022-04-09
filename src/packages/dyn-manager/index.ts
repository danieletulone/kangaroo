type Module = () => Promise<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}>;

type Modules = Record<string, Module>;

export class DynManager {
  private _modules: Modules = {};

  install() {
    console.log("installed");
  }

  register(modules: Modules) {
    Object.keys(modules).forEach((key: string) => {
      const newKey = "@/" + key.split("../").join("").split("./").join("");
      this._modules[newKey] = modules[key];
    });
  }

  load(path: string, ext = "ts") {
    if (!this._modules[path + "." + ext]) {
      throw new Error("Module " + path + " not found");
    }

    return this._modules[path + "." + ext]();
  }
}

export const createDyn = function (registrations: Modules[] = []): DynManager {
  const dynManager = new DynManager();

  registrations.forEach((registration) => {
    dynManager.register(registration);
  });

  return dynManager;
};
