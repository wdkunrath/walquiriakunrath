import { EnvironmentScheme, EnvironmentTypeEnum } from "./environment-scheme";

export const environment: EnvironmentScheme = {
    production: false,
    name: "MOCK",
    type: EnvironmentTypeEnum.MOCK,
    providers: {}
};
