import { Platform } from 'react-native';

/**
 * Device and platform based information
 */
const isIOS = Platform.OS == 'ios';
const isAndroid = !isIOS;
const deviceType = isIOS ? 1 : 2;

export default {
    isIOS,
    isAndroid,
    deviceType,
    os: Platform.OS,
}