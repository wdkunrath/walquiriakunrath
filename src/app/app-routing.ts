export const APP_PATH_LAYOUT = {
    LAYOUT_PUBLIC: 'public',
    LAYOUT_ADM: 'adm'
}

enum PathIDEnum {
    HOME = 'HOME',
    LOGIN = 'LOGIN',
    CADASTROS = 'CADASTROS'
}

export const APP_PATH: Record<PathIDEnum, string> = {
    HOME: "home",
    LOGIN: "login",
    CADASTROS: "cadastros"
}

export const AppRoutesModule: Record<PathIDEnum, string> = {
    HOME: `${APP_PATH_LAYOUT.LAYOUT_PUBLIC}/${APP_PATH.HOME}`,
    LOGIN: `${APP_PATH_LAYOUT.LAYOUT_ADM}/${APP_PATH.LOGIN}`,
    CADASTROS: `${APP_PATH_LAYOUT.LAYOUT_ADM}/${APP_PATH.CADASTROS}`
}
