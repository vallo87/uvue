import { HandleFunction } from 'connect';
import { IRenderer } from './IRenderer';
import { IServerOptions } from './IServerOptions';

export interface IServer {
  // Options
  options: IServerOptions;

  // Add middlewares
  use(middleware: HandleFunction);
  use(path: string, middleware: HandleFunction);

  // Plugins system
  addPlugin(plugin: any, options?: any);
  callHook(name: string, ...args: any[]): Promise<any>;

  // Start server
  start(): Promise<void>;
}