export interface InstallSourceInfoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
