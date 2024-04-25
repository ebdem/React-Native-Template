import { RouteNames } from 'common/constants';
import { AuthStackParamList } from 'types/navigationTypes';
import { StackRoutesType } from 'types/navigationTypes/common';
import { LaunchScreen } from 'screens/launch';
import { LoginScreen } from 'screens/login';
import { SignUpScreen } from 'screens/signUp';

const authStackRoutes: StackRoutesType<AuthStackParamList> = [
  { name: RouteNames.login, component: LoginScreen },
  { name: RouteNames.signUp, component: SignUpScreen },
  { name: RouteNames.launch, component: LaunchScreen },
];

export default authStackRoutes;
