'use client';

import { OrganizationList, useOrganization } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Onboarding() {
  const { organization } = useOrganization();
  const router = useRouter();

  // Fallback redirect when org becomes available
  useEffect(() => {
    if (organization) {
      router.push(`/organization/${organization.slug}`);
    }
  }, [organization, router]);

  return (
    <div className="flex justify-center items-center pt-14">
      <OrganizationList hidePersonal />
    </div>
  );
}
