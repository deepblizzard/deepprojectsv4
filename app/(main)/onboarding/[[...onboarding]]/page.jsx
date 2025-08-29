// app/onboarding/page.tsx
import { auth, currentOrganization } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { OrganizationList } from "@clerk/nextjs";

export default async function OnboardingPage() {
  const { orgId, userId } = auth();

  if (!userId) redirect("/sign-in"); // redirect if not signed in

  if (orgId) {
    const org = await currentOrganization();
    if (org) redirect(`/organization/${org.slug}`); // redirect if org exists
  }

  return (
    <div className="flex justify-center items-center pt-14">
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/onboarding"
        afterSelectOrganizationUrl="/onboarding"
      />
    </div>
  );
}
