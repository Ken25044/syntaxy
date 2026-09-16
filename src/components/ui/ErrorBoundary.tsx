import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import type { FallbackProps } from 'react-error-boundary';

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const errorMessage = error instanceof Error ? error.message : 'データの取得中に問題が発生しました。インターネット接続を確認し、もう一度お試しください。';
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] p-8 text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 mb-2">
        <span className="text-2xl">⚠️</span>
      </div>
      <h2 className="text-xl font-bold text-gray-900">予期せぬエラーが発生しました</h2>
      <p className="text-gray-500 max-w-md">
        {errorMessage}
      </p>
      <div className="pt-4">
        <button onClick={resetErrorBoundary} className="px-6 py-2.5 bg-primary-600 text-white rounded-xl font-semibold shadow hover:bg-primary-700 transition-colors">
          もう一度試す
        </button>
      </div>
    </div>
  );
};

interface ErrorBoundaryProps {
  children: React.ReactNode;
  onReset?: () => void;
}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children, onReset }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
      {children}
    </ReactErrorBoundary>
  );
};
