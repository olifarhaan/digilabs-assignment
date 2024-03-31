"use client";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Home() {
  const notify = () => toast.success("Notification has been sent");
  return (
    <main className="flex justify-between mx-auto items-center px-2 py-5">
      <div className="flex flex-col justify-between items-center min-h-[90vh] mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-semibold text-4xl mt-10 text-center">
            Digilabs Assignment
          </h1>
          <p className="text-[#989998] text-center">I have done this project</p>
        </div>
        <div className="flex self-center">
          <Image
            priority={false}
            className="w-full sm:w-[400px] sm:h-[400px]"
            src="/notifications.svg"
            alt="Image"
            width={500}
            height={500}
          />
        </div>
        <button
          className="gradient-border p-[1px] w-full rounded"
          onClick={notify}
        >
          <div className="gradient-button p-4 w-full rounded">
            Send Notifications
          </div>
        </button>
      </div>
    </main>
  );
}
