import * as React from 'react';
import FallbackScreen from './fallbackScreen';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  public state: State = {
    hasError: false,
  };

  public componentDidCatch(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _error: Error /* errorInfo: React.ErrorInfo */,
  ): void {
    // log error
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  private resetState = async (): Promise<void> => {
    this.setState({ hasError: false });
  };

  public render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <FallbackScreen resetState={this.resetState} />;
    }

    return children;
  }
}

export default ErrorBoundary;
