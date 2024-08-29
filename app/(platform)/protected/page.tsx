"use client";

import { useAuth, useUser } from "@clerk/nextjs";

const ProtectedPage = () => {
  const { userId } = useAuth();
  const { user } = useUser();

  return (
    <div>
      <h1>User: {user?.firstName}</h1>
      <h2>userId: {userId}</h2>
    </div>
  );
};

export default ProtectedPage;
