import { storeToken } from "@/app/auth/storeToken";

export const HandleLogin = async (username, password) => {
  try {
    const response = await fetch("http://server.sistekhagano.org/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    await storeToken(data.accessToken);
    return data.accessToken;
  } catch (error) {
    throw new Error(`Error during login: ${error.message}`);
  }
};

export default HandleLogin;
