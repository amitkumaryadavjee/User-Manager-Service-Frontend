import { useParams, useNavigate, useLocation } from "react-router-dom";

export interface RouteComponentProps<P = any> {
  params: P;
  navigate: ReturnType<typeof useNavigate>;
  location: ReturnType<typeof useLocation>;
}

// Higher-order component to inject router props into class components
export function withRouter<T extends RouteComponentProps>(Component: React.ComponentType<T>) {
  return (props: Omit<T, keyof RouteComponentProps>) => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    return (
      <Component
        {...(props as T)}
        params={params}
        navigate={navigate}
        location={location}
      />
    );
  };
}
