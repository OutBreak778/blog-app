// "use client";

// import { projectId, dataset } from "./sanity.client";
// import { definePreview } from "next-sanity/preview";

// function onPublicAccessOnly() {
//   throw new Error(`Unable to load preview as you are not logged in`);
// }
// if (!projectId || !dataset) {
//   throw new Error(
//     `Missing the project or dataset. check you sanity.json or .env file`
//   );
// }

// export const usePreview = definePreview({
//   projectId,
//   dataset,
//   onPublicAccessOnly,
// });


"use client"

import { projectId,dataset } from "./sanity.client"
import {definePreview} from "next-sanity/preview"

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you are not logged in`);
}

if (!projectId || !dataset) {
  throw new Error(
    `Missing the project or dataset. check you sanity.json or .env file`
  );
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});