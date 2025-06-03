import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users, Plus, CalendarPlus, School } from "lucide-react";

const Sidebar = () => {
  const {
    getUsers,
    users,
    groups,
    selectedUser,
    setSelectedUser,
    isUsersLoading,
    createGroup,
    getGroups,
  } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  let [formData, setFormData] = useState();
  const [isCreateGroup, setCreateGroup] = useState(false);
  const [grp, setGrp] = useState([]);
  const [cntOnlineUsers, setCntOnlineUsers] = useState(onlineUsers.length);

  // ------------------------------------------------------------------------------
  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 flex
                      items-center justify-center
                      bg-black bg-opacity-50 z-10"
      >
        <div
          className="bg-base-300 rounded-lg
                          shadow-lg p-4 max-w-md
                          w-full relative"
        >
          <button
            className="absolute top-4 right-2
                             text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &#x2715; {/* Close button */}
          </button>
          {children}
        </div>
      </div>
    );
  };

  const AlertModal = ({ isOpen, onClose }) => {
    [formData, setFormData] = useState({
      name: "",
      course: "",
      year: "",
    });

    useEffect(() => {
      setCntOnlineUsers(onlineUsers.length ? onlineUsers.length - 1 : 0);
    }, [onlineUsers]);

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="">
          <div className="max-w-2xl mx-auto">
            <div className="p-6 space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-semibold ">Create Group</h1>
              </div>

              <form onSubmit={handleCreategroup} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Group Name</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {/* <Mail className="h-5 w-5 text-base-content/40" /> */}
                      <Users className="h-5 w-5 text-base-content/40" />
                    </div>
                    <input
                      type="text"
                      className={`input input-bordered w-full pl-10`}
                      placeholder="Create a Discuss Group"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Your Course</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <School className="size-5 text-base-content/40" />
                    </div>
                    <select
                      id="course"
                      name="options"
                      className="mt-1 block w-full rounded-md shadow-sm sm:text-sm input input-bordered pl-10"
                      value={formData.course}
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                    >
                      <option value="" disabled>
                        Select Your Course
                      </option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="B.C.A">B.C.A</option>
                      <option value="M.C.A">M.C.A</option>
                      <option value="B.A">B.A</option>
                      <option value="M.B.A">M.B.A</option>
                      <option value="Diploma">Diploma</option>
                    </select>
                  </div>
                </div>

                {/* ----------------------------------------------------------------------------- */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Year</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <CalendarPlus className="size-5 text-base-content/40" />
                    </div>
                    <select
                      id="year"
                      name="options"
                      className="mt-1 block w-full rounded-md shadow-sm sm:text-sm input input-bordered pl-10"
                      value={formData.year}
                      onChange={(e) =>
                        setFormData({ ...formData, year: e.target.value })
                      }
                    >
                      <option value="" disabled>
                        Select Your Year
                      </option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  {!isCreateGroup ? "Create Group" : onClose()}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  // handle create group function ------------------------
  let handleCreategroup = async (e) => {
    e.preventDefault();
    await createGroup(formData);
    await setCreateGroup(true);
    await getUsers();
    await setCreateGroup(false);
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    getGroups();
  }, [getGroups]);

  useEffect(() => {
    setGrp(groups);
    // console.log(grp);
  });

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : [...users].sort((a, b) => {
        const aOnline = onlineUsers.includes(a._id);
        const bOnline = onlineUsers.includes(b._id);
        return aOnline === bOnline ? 0 : aOnline ? -1 : 1;
      });

  console.log("group::::", grp);
  console.log("filteredUsers::", filteredUsers);

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <Users className="size-6" />
            <span className="font-medium hidden lg:block">Contacts</span>
          </div>

          {/* Here create group button present ********************************************** */}

          {/* <div className="text-3xl btn btn-sm gap-2 transition-colors" onClick={() => setModalOpen(true)}>
            <span className="hidden sm:inline">+</span>
            <Plus className="size-5"/>
          </div> */}

          <AlertModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        </div>
        {/* TODO: Online filter toggle */}
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm">Show online only</span>
          </label>
          <span className="text-xs text-zinc-500">
            ({cntOnlineUsers} online)
          </span>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3">
        {grp.map((group) => (
          <button
            key={group._id}
            onClick={() => setSelectedUser(group)}
            className={`
              w-full p-3 flex items-center gap-3
              hover:bg-base-300 transition-colors
              ${
                selectedUser?._id === group._id
                  ? "bg-base-300 ring-1 ring-base-300"
                  : ""
              }   
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={group.profilePic || "/group.png"}
                alt={group.name}
                className="size-12 object-cover rounded-full border"
              />
              {/* {onlineUsers.includes(group._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-zinc-900"
                />
              )} */}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate">{group.name} Group</div>
              <div className="text-sm text-zinc-400">
                {/* {onlineUsers.includes(group._id) ? "Online" : "Offline"} */}
                Members: {group.members.length}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-3
              hover:bg-base-300 transition-colors
              ${
                selectedUser?._id === user._id
                  ? "bg-base-300 ring-1 ring-base-300"
                  : ""
              }
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-12 object-cover rounded-full border"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-zinc-900"
                />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-zinc-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-zinc-500 py-4">No online users</div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;
