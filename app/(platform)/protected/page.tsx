import { currentUser } from "@clerk/nextjs/server";

const ProtectedPage = async () => {
  const user = await currentUser();
  return (
    <div>
      <h1>User: {user?.firstName}</h1>
    </div>
  );
};

export default ProtectedPage;
