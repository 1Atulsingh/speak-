import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import FeedCard from "../../Components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { graphqlClient } from "../../clients/api";
import { verifyGoogleTokenQuery } from "../../graphql/query/user";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { useQueryClient } from '@tanstack/react-query';



interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <CiHome />,
  },
  {
    title: 'Explore',
    icon: <FaSearch />,
  },
  {
    title: 'Notification',
    icon: <IoMdNotifications />,
  },
  {
    title: 'Message',
    icon: <FaRegMessage />,
  },
  {
    title: 'Bookmark',
    icon: <CiBookmark />,
  },
  {
    title: 'Communities',
    icon: <IoPeople />,
  },
  {
    title: 'Premium',
    icon: <FaXTwitter />,
  },
  {
    title: 'Profile',
    icon: <CgProfile />,
  },
  {
    title: 'More',
    icon: <CiCircleMore />,
  },
];


export default function Home() {
  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if (!googleToken) return toast.error('Google token not found');
    try{
    const { verifyGoogleToken }= 
    await graphqlClient.request(
      verifyGoogleTokenQuery,
      {token: googleToken}); 
      console.log(verifyGoogleToken);
      toast.success("verified success");
      if (verifyGoogleToken) {
        window.localStorage.setItem("googleToken", verifyGoogleToken);
      }
    } catch(error){
      console.error('error verifying Google token:' ,error);
      toast.error('error verifying Google token');
    }
  }, []);

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 ml-9">
          <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 transition-all cursor-pointer">
            <FaXTwitter />
          </div>
          <div className="text-2xl pr-20">
            <ul>
              {SidebarMenuItems.map((items) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-900 rounded-full p-4 w-fit cursor-pointer"
                  key={items.title}
                >
                  <span>{items.icon}</span>
                  {items.title}
                  <span></span>
                </li>
              ))}
            </ul>
            <div className="mt-2 pr-4">
              <button className="bg-[#1d9bf0] p-2 rounded-full w-full mt-2 ">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-slate-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 ">
          <div className="p-5 bg-slate-700 rounded-lg">
            <h1 className="my-2 text-2xl">New to TweetStream?</h1>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
}


