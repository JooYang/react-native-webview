import { requireNativeComponent } from 'react-native';
import type { NativeWebViewMacOS } from './WebViewTypes';

const RNCWebViewPatch: typeof NativeWebViewMacOS =
  requireNativeComponent('RNCWebViewPatch');

export default RNCWebViewPatch;
