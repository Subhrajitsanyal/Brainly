import { useRef } from "react";
import { Button } from "../components/UI/Button"; 
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";   

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        try {
            const response = await axios.post<{ token: string }>(
                BACKEND_URL + "/api/v1/signin",
                { username, password }
            );

            // success case
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            toast.success("Signed in successfully! ");   // popup
            navigate("/dashboard");
        } catch (error: any) {
            //  failure case
            if (error.response && error.response.status === 403) {
                toast.error("Incorrect credentials ❌");   // popup
            } else {
                toast.error("Something went wrong. Try again!");
            }
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input reference={usernameRef} placeholder="Username" />
                <Input reference={passwordRef} placeholder="Password" />
                <div className="flex justify-center pt-4">
                    <Button 
                        onClick={signin} 
                        loading={false} 
                        variant="primary" 
                        text="Signin" 
                        fullWidth={true} 
                    />
                </div>
            </div>
        </div>
    );
}
