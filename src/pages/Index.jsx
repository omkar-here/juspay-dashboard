import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Welcome to Your Dashboard App</h1>
        <p className="text-xl text-muted-foreground mb-8">A beautiful eCommerce analytics dashboard</p>
        <Link to="/dashboard">
          <Button size="lg" className="gap-2">
            <LayoutDashboard size={20} />
            View Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
