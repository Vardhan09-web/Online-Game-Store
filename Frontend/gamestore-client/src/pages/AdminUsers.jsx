import React, { useEffect, useState, useRef } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { Key, Loader2Icon, Pencil, Plus, Trash, TriangleAlert, X } from 'lucide-react';
import { getUsers, addUser, editUser, deleteUser, resetPassword } from '../api/api';
import { toast } from 'sonner';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef(0);
  const passwordRef = useRef('');
  const roleRef = useRef('');

  const fetchData = async () => {
    try {
      const res = await getUsers();
      if (res.status === 200) {
        setUsers(res.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Add user
  const handleAdd = async (e) => {
    e.preventDefault();
    const user = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        role: roleRef.current.value,
        password: passwordRef.current.value
    };

    try {
        const response = await addUser(user);
        if (response.status === 201) {
            toast.success('User Added');
            setShowAdd(false);
            fetchData(); // Refresh the user list
        }
    } catch (error) {
        toast.error(error.response?.data?.message || "Error while Adding");
        console.error(error);
    }
};
  

  // Edit user
  const handleEdit = async (e) => {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      role: roleRef.current.value,
    };
    try {
      const response = await editUser(user, currentUser._id);
      if (response.status === 200) {
        setShowEdit(false);
        fetchData();
        toast.info("User Updated!");
      }
    } catch (error) {
      toast.error("Error while Updating");
    }
  };

  // Reset password
  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const response = await resetPassword({ password: passwordRef.current.value }, currentUser._id);
      if (response.status === 200) {
        setShowReset(false);
        toast.warning("User Password Updated!");
      }
    } catch (error) {
      toast.error("Error while Updating");
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      const response = await deleteUser(id);
      if (response.status === 200) {
        toast.success('User Deleted');
        fetchData();
      }
    } catch (error) {
      toast.error("Error while Deleting");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-[90vh] flex justify-center items-center">
        <Loader2Icon className="text-purple-500 h-14 w-14 animate-spin" />
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <AdminLayout>
        <div className="space-y-6">
          <div className="w-full flex justify-between items-center my-4 shadow-md rounded-md p-1 border">
            <h1 className="text-xl font-semibold text-white">Users</h1>
            <button className="w-10 h-10 text-green-500 border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white">
              <Plus className="w-8 h-8" onClick={() => setShowAdd(true)} />
            </button>
          </div>
          <div className="h-[60vh] w-full flex flex-col justify-center items-center gap-3">
            <TriangleAlert className="text-orange-400 h-12 w-12" />
            <p className="text-white">No Users Available!</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="w-full flex justify-between items-center my-4 shadow-md rounded-md p-1 border">
          <h1 className="text-xl font-semibold text-white">Users</h1>
          <button
            className="w-10 h-10 text-green-500 border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white"
            onClick={() => setShowAdd(true)}
          >
            <Plus className="w-8 h-8" />
          </button>
        </div>
        <table className="w-full border-collapse shadow-lg rounded-md">
          <thead className="text-purple-500 font-bold text-left bg-gray-800">
            <tr>
              <th className="p-6 text-white">UID</th>
              <th className="p-6 text-white">Name</th>
              <th className="p-6 text-white">Role</th>
              <th className="p-6 text-white">Email</th>
              <th className="p-6 text-white">Phone</th>
              <th className="p-6 text-white">Actions</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {users.map((user) => (
              <tr key={user._id} className="bg-gray-700 hover:bg-gray-600">
                <td className="p-4">{user._id}</td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.phone}</td>
                <td className="p-4 flex items-center gap-4">
                  <button
                    className="border-blue-500 text-blue-500 p-2 rounded-md hover:bg-blue-500 hover:text-white"
                    onClick={() => {
                      setCurrentUser(user);
                      setShowEdit(true);
                    }}
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button
                    className="border-orange-500 text-orange-500 p-2 rounded-md hover:bg-orange-500 hover:text-white"
                    onClick={() => {
                      setCurrentUser(user);
                      setShowReset(true);
                    }}
                  >
                    <Key className="w-5 h-5" />
                  </button>
                  <button
                    className="border-red-500 text-red-500 p-2 rounded-md hover:bg-red-500 hover:text-white"
                    onClick={() => handleDelete(user._id)}
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      {showAdd && (
        <div className="absolute top-0 left-0 z-50 w-full h-screen bg-black/40 flex justify-center items-center">
          <div className="w-1/3 bg-white p-6 rounded-md shadow-2xl">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-green-500">Add User</h2>
              <button className="text-red-500" onClick={() => setShowAdd(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4">
              <input
                ref={nameRef}
                type="text"
                placeholder="Name"
                className="w-full p-4 border-b-2 border-gray-300 focus:border-green-500"
                required
              />
              <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                className="w-full p-4 border-b-2 border-gray-300 focus:border-green-500"
                required
              />
              <input
                ref={phoneRef}
                type="tel"
                placeholder="Phone"
                className="w-full p-4 border-b-2 border-gray-300 focus:border-green-500"
                required
              />
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                className="w-full p-4 border-b-2 border-gray-300 focus:border-green-500"
                required
              />
              <select
                ref={roleRef}
                className="w-full p-4 border-b-2 border-gray-300 focus:border-green-500"
                required
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <button type="submit" className="w-full bg-green-500 p-4 text-white rounded-md">
                Add User
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEdit && (
        <div className="absolute top-0 left-0 z-50 w-full h-screen bg-black/40 flex justify-center items-center">
          <div className="w-1/3 bg-white p-6 rounded-md shadow-2xl">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-blue-500">Edit User</h2>
              <button className="text-red-500" onClick={() => setShowEdit(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleEdit} className="space-y-4">
              <input
                ref={nameRef}
                type="text"
                placeholder="Name"
                defaultValue={currentUser?.name}
                className="w-full p-4 border-b-2 border-gray-300 focus:border-blue-500"
                required
              />
              <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                defaultValue={currentUser?.email}
                className="w-full p-4 border-b-2 border-gray-300 focus:border-blue-500"
                required
              />
              <input
                ref={phoneRef}
                type="tel"
                placeholder="Phone"
                defaultValue={currentUser?.phone}
                className="w-full p-4 border-b-2 border-gray-300 focus:border-blue-500"
                required
              />
              <select
                ref={roleRef}
                defaultValue={currentUser?.role}
                className="w-full p-4 border-b-2 border-gray-300 focus:border-blue-500"
                required
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <button type="submit" className="w-full bg-blue-500 p-4 text-white rounded-md">
                Update User
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Reset Password Modal */}
      {showReset && (
        <div className="absolute top-0 left-0 z-50 w-full h-screen bg-black/40 flex justify-center items-center">
          <div className="w-1/3 bg-white p-6 rounded-md shadow-2xl">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-orange-500">Reset Password</h2>
              <button className="text-red-500" onClick={() => setShowReset(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleReset} className="space-y-4">
              <input
                ref={passwordRef}
                type="password"
                placeholder="New Password"
                className="w-full p-4 border-b-2 border-gray-300 focus:border-orange-500"
                required
              />
              <button type="submit" className="w-full bg-orange-500 p-4 text-white rounded-md">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminUsers;
