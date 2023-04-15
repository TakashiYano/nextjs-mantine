import type { CustomLayout } from "next";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";
import { getPath } from "src/lib/const";
import { Button } from "src/lib/mantine";
import { ActiveLink } from "src/lib/next";

const ITEMS = [
  { href: getPath("INDEX"), label: "ホーム" },
  { href: getPath("SETTING"), label: "設定" },
];

export const DashboardLayout: CustomLayout = (page) => {
  return (
    <div>
      <nav>
        {ITEMS.map(({ href, label }) => {
          return (
            <ActiveLink key={label} href={href} passHref>
              {(isActive) => {
                return (
                  <Button
                    component="a"
                    variant={isActive ? "filled" : "outline"}
                  >
                    label
                  </Button>
                );
              }}
            </ActiveLink>
          );
        })}
      </nav>
      <main>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
    </div>
  );
};
