import * as http from 'http';
import * as http2 from 'http2';
import * as https from 'https';
import { ConnectAdapter } from './ConnectAdapter';

export class ExpressAdapter extends ConnectAdapter {
  /**
   * Express instance
   */
  protected declare app: any;

  public createApp(adatperArgs: any[] = []) {
    // Create connect instance
    this.app = require('express')();

    // Create HTTP server
    const httpsOptions = this.options.https || { key: null, cert: null };
    if (httpsOptions.key && httpsOptions.cert) {
      if (this.options.http2) {
        this.server = http2.createSecureServer(httpsOptions, this.app);
      } else {
        this.server = https.createServer(httpsOptions, this.app);
      }
    } else {
      this.server = http.createServer(this.app);
    }
  }
}
