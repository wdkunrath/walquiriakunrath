import { EnvironmentScheme, EnvironmentTypeEnum } from "./environment-scheme";

export const environment: EnvironmentScheme = {
    production: true,
    name: "PROD",
    type: EnvironmentTypeEnum.PRD,
    providers: {}
};
