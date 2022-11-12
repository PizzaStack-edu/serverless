import jwt from "jsonwebtoken";

export const signToken = (id: string): string =>
  jwt.sign(
    {
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["admin"],
        "x-hasura-default-role": "admin",
        "x-hasura-user-id": id,
      },
    },
    "NMSGIe85DcO5hln6IIlL0HtoEnZePXT3"
  );
