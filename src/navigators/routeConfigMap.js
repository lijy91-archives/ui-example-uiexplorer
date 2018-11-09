import ErrorNotFound from '../screens/ErrorNotFound';
import Home from '../screens/Home';
import ListOfSlices from '../screens/ListOfSlices';
import DemoActivityIndicator from '../screens/DemoActivityIndicator';
import DemoAppBar from '../screens/DemoAppBar';
import DemoAvatar from '../screens/DemoAvatar';
import DemoBadge from '../screens/DemoBadge';
import DemoButton from '../screens/DemoButton';
import DemoCard from '../screens/DemoCard';
import DemoCheckBox from '../screens/DemoCheckBox';
import DemoDivider from '../screens/DemoDivider';
import DemoForm from '../screens/DemoForm';
import DemoGrid from '../screens/DemoGrid';
import DemoHyperlinkButton from '../screens/DemoHyperlinkButton';
import DemoIcon from '../screens/DemoIcon';
import DemoIconButton from '../screens/DemoIconButton';
import DemoListItem from '../screens/DemoListItem';
import DemoModal from '../screens/DemoModal';
import DemoRadioButton from '../screens/DemoRadioButton';
import DemoSubtitle from '../screens/DemoSubtitle';
import DemoSwitch from '../screens/DemoSwitch';
import DemoTabBar from '../screens/DemoTabBar';
import DemoText from '../screens/DemoText';
import DemoTextInput from '../screens/DemoTextInput';
import DemoTitle from '../screens/DemoTitle';
import DemoView from '../screens/DemoView';
import DemoViewPager from '../screens/DemoViewPager';

import SliceNoDemo from '../screens/SliceNoDemo';
import sliceActivityIndicatorRouteConfigMap from '../screens/SliceActivityIndicator/routeConfigMap';
import sliceAvatarRouteConfigMap from '../screens/SliceAvatar/routeConfigMap';
import sliceBadgeRouteConfigMap from '../screens/SliceBadge/routeConfigMap';
import sliceButtonRouteConfigMap from '../screens/SliceButton/routeConfigMap';
import sliceCardRouteConfigMap from '../screens/SliceCard/routeConfigMap';
import sliceCheckBoxRouteConfigMap from '../screens/SliceCheckBox/routeConfigMap';
import sliceDividerRouteConfigMap from '../screens/SliceDivider/routeConfigMap';
import sliceFormRouteConfigMap from '../screens/SliceForm/routeConfigMap';
import sliceGridRouteConfigMap from '../screens/SliceGrid/routeConfigMap';
import sliceHyperlinkButtonRouteConfigMap from '../screens/SliceHyperlinkButton/routeConfigMap';
import sliceIconRouteConfigMap from '../screens/SliceIcon/routeConfigMap';
import sliceIconButtonRouteConfigMap from '../screens/SliceIconButton/routeConfigMap';
import sliceRadioButtonRouteConfigMap from '../screens/SliceRadioButton/routeConfigMap';
import sliceSubtitleRouteConfigMap from '../screens/SliceSubtitle/routeConfigMap';
import sliceSwitchRouteConfigMap from '../screens/SliceSwitch/routeConfigMap';
import sliceTextRouteConfigMap from '../screens/SliceText/routeConfigMap';
import sliceTextInputRouteConfigMap from '../screens/SliceTextInput/routeConfigMap';
import sliceTitleRouteConfigMap from '../screens/SliceTitle/routeConfigMap';
import sliceViewRouteConfigMap from '../screens/SliceView/routeConfigMap';

const sliceRouteConfigMap = {
  SliceNoDemo: {
    screen: SliceNoDemo,
    path: 'slices/no-demo',
  },
  ...sliceActivityIndicatorRouteConfigMap,
  ...sliceAvatarRouteConfigMap,
  ...sliceBadgeRouteConfigMap,
  ...sliceButtonRouteConfigMap,
  ...sliceCardRouteConfigMap,
  ...sliceCheckBoxRouteConfigMap,
  ...sliceDividerRouteConfigMap,
  ...sliceFormRouteConfigMap,
  ...sliceGridRouteConfigMap,
  ...sliceHyperlinkButtonRouteConfigMap,
  ...sliceIconRouteConfigMap,
  ...sliceIconButtonRouteConfigMap,
  ...sliceRadioButtonRouteConfigMap,
  ...sliceSubtitleRouteConfigMap,
  ...sliceSwitchRouteConfigMap,
  ...sliceTextRouteConfigMap,
  ...sliceTextInputRouteConfigMap,
  ...sliceTitleRouteConfigMap,
  ...sliceViewRouteConfigMap,
};

const routeConfigMap = {
  ErrorNotFound: {
    screen: ErrorNotFound,
  },
  Home: {
    screen: Home,
    path: '',
  },
  ListOfSlices: {
    screen: ListOfSlices,
    path: 'list-of-slices',
  },
  DemoActivityIndicator: {
    screen: DemoActivityIndicator,
    path: 'demo-activityindicator',
  },
  DemoAppBar: {
    screen: DemoAppBar,
    path: 'demo-appbar',
  },
  DemoAvatar: {
    screen: DemoAvatar,
    path: 'demo-avatar',
  },
  DemoBadge: {
    screen: DemoBadge,
    path: 'demo-badge',
  },
  DemoButton: {
    screen: DemoButton,
    path: 'demo-button',
  },
  DemoCard: {
    screen: DemoCard,
    path: 'demo-card',
  },
  DemoCheckBox: {
    screen: DemoCheckBox,
    path: 'demo-checkbox',
  },
  DemoDivider: {
    screen: DemoDivider,
    path: 'demo-divider',
  },
  DemoForm: {
    screen: DemoForm,
    path: 'demo-form',
  },
  DemoGrid: {
    screen: DemoGrid,
    path: 'demo-grid',
  },
  DemoHyperlinkButton: {
    screen: DemoHyperlinkButton,
    path: 'demo-hyperlinkbutton',
  },
  DemoIcon: {
    screen: DemoIcon,
    path: 'demo-icon',
  },
  DemoIconButton: {
    screen: DemoIconButton,
    path: 'demo-iconbutton',
  },
  DemoListItem: {
    screen: DemoListItem,
    path: 'demo-listitem',
  },
  DemoModal: {
    screen: DemoModal,
    path: 'demo-modal',
  },
  DemoRadioButton: {
    screen: DemoRadioButton,
    path: 'demo-radiobutton',
  },
  DemoSubtitle: {
    screen: DemoSubtitle,
    path: 'demo-subtitle',
  },
  DemoSwitch: {
    screen: DemoSwitch,
    path: 'demo-switch',
  },
  DemoTabBar: {
    screen: DemoTabBar,
    path: 'demo-tabbar',
  },
  DemoText: {
    screen: DemoText,
    path: 'demo-text',
  },
  DemoTextInput: {
    screen: DemoTextInput,
    path: 'demo-textinput',
  },
  DemoTitle: {
    screen: DemoTitle,
    path: 'demo-title',
  },
  DemoView: {
    screen: DemoView,
    path: 'demo-view',
  },
  DemoViewPager: {
    screen: DemoViewPager,
    path: 'demo-viewpager',
  },
  ...sliceRouteConfigMap,
};

export {
  routeConfigMap as default,
  sliceRouteConfigMap,
};
