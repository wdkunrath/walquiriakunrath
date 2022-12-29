export enum EnvironmentTypeEnum {
    DEV = 'DEV',
    MOCK = 'MOCK',
    PRD = 'PROD'
}

export interface EnvironmentScheme {
    name: string;
    type: EnvironmentTypeEnum;
    production: boolean;
    providers: {};
}
