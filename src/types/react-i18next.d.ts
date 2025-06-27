
import 'react-i18next';
import { ReactNode } from 'react';

// Extend the react-i18next module to include our custom namespace structure
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: {
        [key: string]: any;
      };
    };
    // Disable react-i18next's JSX augmentation to prevent type conflicts
    allowObjectInHTMLChildren: false;
  }
}

// Completely override react-i18next's global JSX augmentation
declare global {
  namespace JSX {
    // Reset all JSX elements to use standard React types
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
    
    // Ensure all intrinsic elements use ReactNode for children
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Explicitly type ReactI18NextChildren as ReactNode to prevent conflicts
declare module 'react-i18next' {
  type ReactI18NextChildren = ReactNode;
}
