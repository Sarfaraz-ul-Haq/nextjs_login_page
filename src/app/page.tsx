"use client";
import { useState } from "react";
import Input from "@/components/input";
import Button from "@/components/button";

function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Email: ", event.target.value);
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Password: ", event.target.value);
    setPassword(event.target.value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-800">
      <div className="flex flex-col gap-3 border border-gray-900  bg-gray-700 px-24 py-24">
        <div className="font-bold text-3xl text-white flex justify-center mb-10">
          LOGIN
        </div>
        <div>
          <Input
            type="input"
            name="email"
            value={email}
            placeholder="Email"
            onChange={onEmailChange}
            style="focus:outline-none hover:border-green-700 hover:border-2 hover:shadow-green-glow rounded px-2 py-2 transition duration-300 ease-in-out bg-gray-600 border border-gray-500 py-2"
          />
        </div>
        <div>
          <Input
            type="input"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onPasswordChange}
            style="focus:outline-none hover:border-green-700 hover:border-2 hover:shadow-green-glow rounded px-2 py-2 transition duration-300 ease-in-out bg-gray-600 border border-gray-500 py-2"
          />
        </div>
        <div className="flex justify-center">
          <Button
            text="LOGIN"
            style="border rounded border-gray-600 bg-gray-600 px-24 py-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
