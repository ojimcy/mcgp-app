import React from "react";
import { router } from "expo-router";
import LoadingSpinner from "../components/others/LoadingSpinner";
import { useAuth } from "../AuthContext/AuthContext";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { isAuthenticated, loading } = useAuth();
    // While the auth state is loading, you might want to show a loader
    if (loading) {
      return <LoadingSpinner />;
    }

    if (!isAuthenticated) {
      router.push("/login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
