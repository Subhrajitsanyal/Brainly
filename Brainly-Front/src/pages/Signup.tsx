import { useRef } from "react";
import { Button } from "../components/UI/Button"; 
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config"; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signup() {
        try {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;

            await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
            });

            // ✅ Toast notification
            toast.success("You have signed up Successfully!");

            // ✅ Turant signin par bhejna
            navigate("/signin");

        } catch (err) {
            toast.error("Signup failed. Try again!");
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input reference={usernameRef} placeholder="Username" />
                <Input reference={passwordRef} placeholder="Password" />
                <div className="flex justify-center pt-4">
                    <Button 
                        onClick={signup} 
                        loading={false} 
                        variant="primary" 
                        text="Signup" 
                        fullWidth={true} 
                    />
                </div>
            </div>
        </div>
    );
}
