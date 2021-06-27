// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // cognito_ipool_id: "ap-south-1:71f1e954-1000-4df7-94aa-9c1110cb2981",
  aws_region: "eu-west-2",
  cognito_upool_id: "eu-west-2_LBV1tannA",
  // cognito_identity_pool_id: "ap-southeast-1:e519d92f-0ff3-4f57-bb81-b9ef1b2e14b7",
  cognito_user_pool_web_client_id: "13j334c38ovp8nmrvof22mpo1c",
  commodities_api_base_url: "https://zwa12ypk69.execute-api.eu-west-2.amazonaws.com/staging/api",
  self_host: "http://localhost:4201"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
