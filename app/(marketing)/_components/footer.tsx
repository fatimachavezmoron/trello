import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full px-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button className="font-poppins" size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button className="font-poppins" size="sm" variant="ghost">
            Terms of service
          </Button>
        </div>
      </div>
    </div>
  );
};
