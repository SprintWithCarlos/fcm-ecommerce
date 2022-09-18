import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => ({
  testEnvironment: "jsdom",
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleNameMapper: {
    "^.+\\.svg$": "<rootDir>/test/__mocks__/svg.ts",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/styleMock.tsx",
    "\\.(css|less|sass)$": "<rootDir>/test/__mocks__/styleMock.tsx",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^d3": "<rootDir>/node_modules/d3/dist/d3.min.js"
  },
  transformIgnorePatterns: ["/node_modules/(?!(^d3)/)"]
});
