'use client';

import { OrganizationList } from '@clerk/nextjs';

export default function Onboarding() {
  return (
    <div className="flex justify-center items-center pt-14">
      <OrganizationList
        hidePersonal
        // Dynamic redirect using function callback
        afterCreateOrganizationUrl={(org) => `/organization/${org.slug}`}
        afterSelectOrganizationUrl={(org) => `/organization/${org.slug}`}
      />
    </div>
  );
}
