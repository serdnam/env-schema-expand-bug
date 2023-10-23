import { Type } from "@sinclair/typebox";
import envSchema from "env-schema";

const baseSchema = Type.Object({
  PASSWORD_STRING: Type.String(),
});

export function getConfig(overrides = {}) {
  const baseConfig = envSchema({
    schema: baseSchema,
    expandEnv: true,
    data: {
      ...process.env,
      ...overrides,
    },
  });
  return {
    passwordString: baseConfig.PASSWORD_STRING,
  };
}
