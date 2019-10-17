import { ok } from './helpers';

import { rubrics } from './data/rubrics';
import { details } from './data/rubrics';

export function getRubric() {
  return ok(rubrics);
}

export function getFolder(rubric) {
  return ok(details.filter(detail => detail.rubric === rubric)[0]);
}
