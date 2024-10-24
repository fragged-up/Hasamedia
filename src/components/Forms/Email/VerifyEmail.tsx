import { useEffect } from "react";

function decodeBase64ToObject(base64String: any) {
  const jsonString = decodeURIComponent(atob(base64String));
  const obj = JSON.parse(jsonString);
  return obj;
}

export default function VerifyEmail({ token }: { token: any }) {
  const tokenData = decodeBase64ToObject(token);

  useEffect(() => {
    const sendEmailVerified = async () => {
      try {
        const verificationData = new FormData();
        Object.keys(tokenData).forEach((key) => {
          verificationData.append(key, tokenData[key]);
        });

        const response = await fetch("https://hasamedia.io/verify.php", {
          method: "POST",
          body: verificationData,
        });

        const data = await response.json();
        console.log(data);

        // Navigate after 10 seconds
        setTimeout(() => {
          window.location.href = "https://hasamedia.io/";
        }, 10000);
      } catch (err: any) {
        console.log(err);
      }
    };

    sendEmailVerified();
  }, [tokenData]);

  return (
    <div className="verify-container flex h-screen flex-col items-center justify-center bg-black">
      <h2 className="text-center text-3xl text-purple-600 font-gilroy-black">
        {tokenData.fullName}, Your Email Has Been Verified
      </h2>
      <h3 className="text-center text-2xl text-purple-600 font-gilroy-black">
        Our Team Will Contact You Soon ...
      </h3>
    </div>
  );
}
