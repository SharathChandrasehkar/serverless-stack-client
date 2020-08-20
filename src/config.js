const dev = {
  STRIPE_KEY: "pk_test_51HHBtmKjIV4AHILwUOTlLqd7qn0iDgEConoGcbBhbEBMTmxofBAtqAgaCsq8KcYevylIyZSdiA2blIQ42Wn9fjv700Gm15UaYH",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-1k3zop97ng1oj"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://8wl77possc.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Vp29PNqUa",
    APP_CLIENT_ID: "qse96725nqd42pgc8fu5hmm0e",
    IDENTITY_POOL_ID: "us-east-2:66c459cd-6417-49f1-898b-4154f4a7dac1"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HHBtmKjIV4AHILwUOTlLqd7qn0iDgEConoGcbBhbEBMTmxofBAtqAgaCsq8KcYevylIyZSdiA2blIQ42Wn9fjv700Gm15UaYH",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-wmhv6fxq9q38"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://937a9pchh3.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_I1y2t0NK6",
    APP_CLIENT_ID: "78c3s3dub6vsbkaq59q4n1t15r",
    IDENTITY_POOL_ID: "us-east-2:3b9205b5-3420-45ee-9156-fc20eb00c95f"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};