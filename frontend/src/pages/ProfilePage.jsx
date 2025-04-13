import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const updateProfilePage =  async (img) => {
    await updateProfile(img);
    setSelectedImg(img);
    setIsOpen(false);
  };

  // useEffect(() => authUser, [authUser]);


  return (
    <div className="h-screen pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold ">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>

          {/* avatar upload section */}

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-32 rounded-full object-cover border-4 "
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
                onClick={toggleDropdown}
              >
                <Camera className="w-5 h-5 text-base-200" />
               
            </label>
            </div>
            <p className="text-sm text-zinc-400">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to get Avatar Photos"}
            </p>
            {/* Dropdown Menu */}
            <div
              className={`mt-2 w-fit bg-base-200 shadow-lg rounded-lg transition-transform transform ${
                isOpen ? 'scale-100 opacity-80' : 'hidden' }`}
              style={{ transitionDuration: '300ms' }}
            >
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2">
                <li>
                  <img
                    src={"/bighead-1.svg"}
                    alt="Profile"
                    className="size-32 rounded-full object-cover border-4 cursor-pointer"
                    onClick={() =>  updateProfilePage('/bighead-1.svg')}
                  />
                </li>
                <li>
                  <img
                    src={"/bighead-2.svg"}
                    alt="Profile"
                    className="size-32 rounded-full object-cover border-4 cursor-pointer"
                    onClick={() => updateProfilePage('/bighead-2.svg')}
                  />
                </li>
                <li>
                  <img
                    src={"/bighead-3.svg"}
                    alt="Profile"
                    className="size-32 rounded-full object-cover border-4 cursor-pointer"
                    onClick={() => updateProfilePage('/bighead-3.svg')}
                  />
                </li>
                <li>
                  <img
                    src={"/bighead-4.svg"}
                    alt="Profile"
                    className="size-32 rounded-full object-cover border-4 cursor-pointer"
                    onClick={() => updateProfilePage('/bighead-4.svg')}
                  />
                </li>
                <li>
                  <img
                    src={"/bighead-5.svg"}
                    alt="Profile"
                    className="size-32 rounded-full object-cover border-4 cursor-pointer"
                    onClick={() => updateProfilePage('/bighead-5.svg')}
                  />
                </li>
                <li>
                  <img
                    src={"/bighead-6.svg"}
                    alt="Profile"
                    className="size-32 rounded-full object-cover border-4 cursor-pointer"
                    onClick={() => updateProfilePage('/bighead-6.svg')}
                  />
                </li>
                <li>
                  <img
                    src={"/bighead-7.svg"}
                    alt="Profile"
                    className="size-32 rounded-full object-cover border-4 cursor-pointer"
                    onClick={() => updateProfilePage('/bighead-7.svg')}
                  />
                </li>
                <li>
                  <img
                    src={"/bighead-8.svg"}
                    alt="Profile"
                    className="size-32 rounded-full object-cover border-4 cursor-pointer"
                    onClick={() => updateProfilePage('/bighead-8.svg')}
                  />
                </li>
                <li>
                  <img
                    src={"/bighead-9.svg"}
                    alt="Profile"
                    className="size-32 rounded-full object-cover border-4 cursor-pointer"
                    onClick={() => updateProfilePage('/bighead-9.svg')}
                  />
                </li>
                <li>
                  <img
                    src={"/bighead-10.svg"}
                    alt="Profile"
                    className="size-32 rounded-full object-cover border-4 cursor-pointer"
                    onClick={() => updateProfilePage('/bighead-10.svg')}
                  />
                </li>
                <li>
                  <img
                    src={"/bighead-11.svg"}
                    alt="Profile"
                    className="size-32 rounded-full object-cover border-4 cursor-pointer"
                    onClick={() => updateProfilePage('/bighead-11.svg')}
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Your UserName
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.fullName}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.email}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Your Course
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.course}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Your Current Year
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.year}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Gender
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.gender}</p>
            </div>
          </div>

          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium  mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
