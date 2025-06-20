"use client";
import { AlertTriangle } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundry extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.error("Error caught by boundary:", error, errorInfo)
  }
  render() {
      if (this.state.hasError) {
        return (
            this.props.fallback || (
                <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                    <div className="text-center p-8">
                        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            something went wrong
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {this.state.error?.message}
                        </p>
                        <button
                         onClick={()=> window.location.reload()}
                         className="px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                            Reload Page
                        </button>
                    </div>
                </div>
            )
        )
      }
      return this.props.children
  }
}
