/* eslint-disable no-restricted-globals */
/* eslint-disable class-methods-use-this */
import { Component } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  reloadPage = (): void => {
    location.reload();
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorMessage
          redirectName="reload page"
          redirectFunction={this.reloadPage}
        />
      );
    }

    return children;
  }
}
