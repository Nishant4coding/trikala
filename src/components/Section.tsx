import { cn } from "lib/utils";
import { ReactNode } from "react";

const Sections = ({ className = "", children }: { className?: string | null, children: ReactNode }) => {
    return (
        <div className={cn("min-h-screen", className)}>
            {children}
        </div>
    );
};

export default Sections;
