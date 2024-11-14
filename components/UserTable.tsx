// src/components/UserTable.tsx
"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    IDNumber: number;
    mobNumber: number;
    field: string;
    semester: string;
    email: string;
    skill: string;
    ExLevel: string;
}

const UserTable: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/register');
            const data = await response.json();
            setUsers(data);
            setFilteredUsers(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.IDNumber.toString().includes(searchTerm)
        );
        setFilteredUsers(filtered);
        console.log("filtered => ", filtered); // Debugging
    }, [searchTerm, users]);

    // Function to handle logout
  const handleLogout = async () => {
    // Remove the isLoggedIn cookie
    document.cookie = "isLoggedIn=; path=/; max-age=0;"; // This clears the cookie
    router.push('/login?message=You%20have%20logged%20out%20successfully');
  };

    return (
        <div className="overflow-x-auto">

            <div className="mb-4 flex justify-between">
                <h1 className="text-2xl font-bold mb-4">Registered Users</h1>
                <input
                    type="text"
                    placeholder="Search by Name, ID Number, or Email"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border w-96 border-gray-300 rounded-md"
                />
                {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
      >
        Logout
      </button>
            </div>
            <table className="min-w-full bg-white border">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">ID Number</th>
                        <th className="px-4 py-2">Mobile Number</th>
                        <th className="px-4 py-2">Field</th>
                        <th className="px-4 py-2">Semester</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Skill</th>
                        <th className="px-4 py-2">Experience Level</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id} className="border-t">
                            <td className="px-4 py-2">{user.name}</td>
                            <td className="px-4 py-2">{user.IDNumber}</td>
                            <td className="px-4 py-2">{user.mobNumber}</td>
                            <td className="px-4 py-2">{user.field}</td>
                            <td className="px-4 py-2">{user.semester}</td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2">{user.skill}</td>
                            <td className="px-4 py-2">{user.ExLevel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
