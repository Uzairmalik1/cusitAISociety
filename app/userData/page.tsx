
import { cookies } from 'next/headers';
import UserTable from '@/components/UserTable';
import { redirect } from 'next/navigation';

export default async function UsersPage() {
   // Await the cookies() Promise to get the actual cookies object
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get('isLoggedIn');

  if (!isLoggedIn) {
    // Redirect to login page if the user is not logged in
    redirect('/login?message=Please%20log%20in%20to%20view%20the%20user%20data%20page');
  }

  return (
    <main className="p-8">
      
      <UserTable />
    </main>
  );
}
