import axios from "axios";

type Prop = {
    email: string,
    password: string,
    recaptchaToken: string,
}

export const ApiSignIn = async ({ email, password, recaptchaToken }: Prop) => {
    try {
        const result = await axios.post("http://localhost:5000/api/users/login", { email, password, recaptchaToken },
            {
                withCredentials: true,
                headers: {
                    "api-key": process.env.NEXT_PUBLIC_API_KEY
                }
            }
        );
        console.log(result);
        return result;
    } catch (error) {
        console.log("error: ", error);
    }
}

export const ApiSignUp = async () => {
    try {
        const result = await axios.get("http://localhost:5000/api/test",
            {
                withCredentials: true,
                headers: {
                    "api-key": process.env.NEXT_PUBLIC_API_KEY
                }
            }
        );
        console.log(result);
        return result;
    } catch (error) {
        console.log("error: ", error);
    }
}
