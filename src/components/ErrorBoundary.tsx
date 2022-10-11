import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
    children: ReactNode
}

interface EBStateProps {
    hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, EBStateProps> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return <div>An error has occured. Please try again later.</div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;