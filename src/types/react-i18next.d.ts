
import 'react-i18next';
import { ReactNode } from 'react';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof import('../i18n/locales/en').default;
    };
  }
}

// Override react-i18next's global JSX augmentation to prevent type conflicts
declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
    interface ElementClass extends React.Component<any> {}
    interface ElementAttributesProperty {
      props: {};
    }
    interface ElementChildrenAttribute {
      children: {};
    }
    interface IntrinsicAttributes extends React.Attributes {}
    interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}
    
    // Force all intrinsic elements to use ReactNode for children
    interface IntrinsicElements {
      [elemName: string]: any & {
        children?: ReactNode;
      };
    }
  }
}

// Augment React types to ensure compatibility
declare module 'react' {
  // Override React's children types to be more permissive
  interface DOMAttributes<T> {
    children?: ReactNode;
  }
  
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    children?: ReactNode;
  }
  
  // Ensure ReactI18NextChildren is assignable to ReactNode
  interface ReactNode {}
}

// Create a type alias to force ReactI18NextChildren to be treated as ReactNode
declare global {
  type ReactI18NextChildren = React.ReactNode;
}
