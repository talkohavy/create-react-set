export type PackageJson = {
  name: string;
  version: string;
  description?: string;
  private?: boolean;
  main?: string;
  types?: string;
  type?: 'module' | 'commonjs';
  publishConfig: {
    registry: string;
    access: 'public' | 'restricted';
  };
};

export enum Commands {
  Main = 'add',
}
