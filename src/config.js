export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HHBtmKjIV4AHILwUOTlLqd7qn0iDgEConoGcbBhbEBMTmxofBAtqAgaCsq8KcYevylIyZSdiA2blIQ42Wn9fjv700Gm15UaYH",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads-shc"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://2ngp21mehe.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_6oWjfteMy",
    APP_CLIENT_ID: "55o64tltnj58ccnh4gafjq31k0",
    IDENTITY_POOL_ID: "us-east-2:e28b147c-8e54-4213-ad7b-0b5b381817aa"
  }
};
