import { error, ok, sendJSON } from './helpers';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { rubrics } from './data/rubrics';

export function getRubric(folder) {
  return ok(rubrics.filter(rubric => rubric.folder === folder));
}

export function getCategory(folder) {
  return ok(rubrics.find(rubric => rubric.category === folder));
}
