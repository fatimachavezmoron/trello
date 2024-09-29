// pages/organization/[orgId]/settings/[[...rest]].tsx
import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
  return (
    <div>
      <OrganizationProfile
        routing="hash"
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
            },
            card: {
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              width: "100%",
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;