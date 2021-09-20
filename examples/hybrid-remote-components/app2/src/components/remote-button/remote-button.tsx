import { IButton } from '../button/button';
import { provideRemoteComponent } from '../remote-component-provider/remote-component-provider';

// NOTE: hybrid-remote components
const JS_URL = 'http://localhost:3002/button.js';
const REMOTE_NAME = 'app2Button';

export const RemoteButton = provideRemoteComponent<IButton>(JS_URL, REMOTE_NAME);
