import constants from './panelBarConstants';

export function onSelect(event: any) {
    return { ...event, type: constants.SELECT };
}

export function onKeyDown(event: any) {
    return { ...event, type: constants.KEY_DOWN };
}

export function onFocus(_: any) {
    return { type: constants.FOCUS };
}

export function onBlur(_: any) {
    return { type: constants.BLUR };
}

export function onButtonClick() {
    return { type: constants.TEMPLATE_CLICK };
}
