import { ReactNode } from 'react';

/**
 * FORBIDDEN COMPONENT - HeadlessAbout
 * Contains business logic for About page
 */

export interface UseAboutLogicReturn {
  // Add any business logic here if needed in the future
}

interface HeadlessAboutProps {
  children: (logic: UseAboutLogicReturn) => ReactNode;
}

export const HeadlessAbout = ({ children }: HeadlessAboutProps) => {
  const logic: UseAboutLogicReturn = {
    // Business logic would go here
  };

  return <>{children(logic)}</>;
};