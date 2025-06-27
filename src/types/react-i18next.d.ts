
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

// Fix type conflicts between ReactI18NextChildren and ReactNode
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
  }
}

// Ensure ReactI18NextChildren is compatible with ReactNode
declare module 'react' {
  interface ReactNode {
    // This allows ReactI18NextChildren to be assignable to ReactNode
  }
}
