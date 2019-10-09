import { error, ok, sendJSON } from './helpers';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { messages } from './data/messages';

export function getMessages(folder) {
  return ok(messages.filter(message => message.folder === folder));
}


export function getMessageById(messageId: number) {
  return ok(messages.find(message => message.id === messageId));
}
