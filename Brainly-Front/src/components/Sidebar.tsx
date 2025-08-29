import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { toast } from "react-toastify";   // ✅ naya import add karo

export function Sidebar() {
    return (
        <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
            <div className="flex text-2xl pt-8 items-center">
                <div className="pr-2 text-purple-600">
                    <Logo />
                </div>
                Brainly
            </div>
            <div className="pt-8 pl-4">
                <SidebarItem text="Twitter" icon={<TwitterIcon />} />
                <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
            </div>

            {/* Logout Button */}
            <div className="absolute bottom-8 left-6 w-full pr-6">
                <button
                    onClick={() => {
                        localStorage.removeItem("token"); // token clear
                        toast.success("You have been logged out!"); 
                        setTimeout(() => {
                            window.location.href = "/";   
                        }, 1000);
                    }}
                    className="bg-purple-200 text-purple-600 py-2.5 px-24 rounded-lg hover:bg-purple-300 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
//    className="bg-purple-200 text-purple-600 py-2.5 px-24 rounded-md font-light flex items-center">