// Type definitions for nodemailer-ses-transport 3.1
// Project: http://github.com/andris9/nodemailer-ses-transport
// Definitions by: Seth Westphal <https://github.com/westy92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as AWS from 'aws-sdk';
import * as nodemailer from 'nodemailer';

declare namespace sesTransport {
    interface SesOptions extends AWS.SES.Types.ClientConfiguration {
        ses: AWS.SES;
        rateLimit?: number;
        ServiceUrl?: string;
        AWSAccessKeyID?: string;
        AWSSecretKey?: string;
        AWSSecurityToken?: string;
        hostOptions?: AWS.HTTPOptions;
    }
}

declare function sesTransport(options: sesTransport.SesOptions): nodemailer.Transport;

export = sesTransport;
