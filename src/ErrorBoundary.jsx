import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }; // Updates state to indicate an error occurred
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo }); // Saves the error and error info for debugging
    console.log(error, errorInfo); // Logs error details for debugging purposes
  }

  render() {
    if (this.state.hasError) {
      // Display a fallback UI if there is an error
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
