import React, { useRef } from "react";

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const submitMsgRef = useRef<HTMLButtonElement>(null);

  const isEmailValid = (email: string): boolean => {
    // Regex per validare un indirizzo email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const full_name_value = fullNameRef.current?.value.trim() || "";
    const email_value = emailRef.current?.value.trim() || "";
    const textarea_value = textareaRef.current?.value.trim() || "";

    const msg_input = [
      fullNameRef.current,
      emailRef.current,
      textareaRef.current,
    ];

    const isFullNameValid = full_name_value !== "";
    const isEmailValidFlag = isEmailValid(email_value);
    const isTextareaValid = textarea_value !== "";

    if (!isFullNameValid || !isEmailValidFlag || !isTextareaValid) {
      msg_input.forEach((element) => {
        if (element?.value.trim().length === 0) {
          element?.classList.add("bg-red-400");
        } else {
          element?.classList.remove("bg-red-400");
        }
      });
      alert("Please enter valid values in all fields.");

      if (!isEmailValidFlag) {
        emailRef.current?.classList.add("bg-red-400");
      } else {
        emailRef.current?.classList.remove("bg-red-400");
      }
    } else {
      await RegisterMsg(full_name_value, email_value, textarea_value);
      msg_input.forEach((element) => {
        element?.classList.remove("bg-red-400");
      });
    }
  };

  const RegisterMsg = async (name: string, email: string, msg: string) => {
    try {
      const response = await fetch("URL_DEL_TUO_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, msg }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alert("Your message has been sent successfully!");
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem sending your message.");
    }
  };
  return (
    <footer className="w-full flex items-center justify-center pt-6">
      <div className="bg-slate-950 flex justify-center items-center flex-wrap flex-col gap-5 w-full">
        <form
          id="area-form"
          className="grid min-w-80"
          onSubmit={handleMessage}
          ref={formRef}
        >
          <label
            htmlFor="full-name"
            className="text-xl font-medium cursor-pointer"
          >
            Full Name
          </label>
          <input
            type="text"
            name="full-name"
            id="full-name"
            ref={fullNameRef}
            className="h-9 outline-none px-2 text-black text-xl placeholder-shown:bg-white focus:bg-slate-300 placeholder-slate-800"
            placeholder="Enter your full name"
          />
          <label
            htmlFor="email"
            className="text-xl font-medium cursor-pointer pt-3"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            className="h-9 outline-none px-2 text-black text-xl  placeholder-shown:bg-white focus:bg-slate-300 placeholder-slate-800"
            placeholder="Enter your email address"
          />
          <label
            htmlFor="textarea"
            className="text-xl font-medium cursor-pointer pt-3"
          >
            Message
          </label>
          <textarea
            name="message"
            id="textarea"
            ref={textareaRef}
            className="h-36 resize-none appearance-none outline-none border-none  px-2 text-black text-xl  placeholder-shown:bg-white focus:bg-slate-300 placeholder-slate-800 "
            placeholder="Write your message here"
          ></textarea>
          <button
            id="submit-msg"
            type="submit"
            ref={submitMsgRef}
            className="mt-5 bg-indigo-400 text-2xl font-medium text-black h-10 rounded-md hover:bg-indigo-500 active:bg-indigo-300"
          >
            Send Message
          </button>
        </form>
        <p className="w-full h-12 mt-5 bg-black flex items-center justify-center gap-5">
          <button className="bg-gray-300 text-black text-xl w-16 rounded-md hover:bg-slate-400">
            <a
              href="https://github.com/Mamadou-mbaye/portfolio-ts"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </button>
          &copy; 2024 Modu. Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
};

export default Footer;

/*const Footer = () => {
  const area_form = document.getElementById("area-form") as HTMLFormElement;
  const full_name = document.getElementById("full-name") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const textarea = document.getElementById("textarea") as HTMLInputElement;
  const submit_msg = document.getElementById("submit-msg") as HTMLButtonElement;

  const isEmailValid = (email: string): boolean => {
    // Regex per validare un indirizzo email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleMessage = (): void => {

    const full_name_value = full_name.value.trim();
    const email_value = email.value.trim();
    const textarea_value = textarea.value.trim();

    const msg_input = [full_name, email, textarea];

    const isFullNameValid = full_name_value !== "";
    const isEmailValidFlag = isEmailValid(email_value);
    const isTextareaValid = textarea_value !== "";

    if (!isFullNameValid || !isEmailValidFlag || !isTextareaValid) {
      msg_input.forEach((element) => {
        if (element.value.trim() === "") {
          element.classList.remove("");
          element.classList.add("bg-red-400");
        } else {
          element.classList.remove("bg-red-400");
          element.classList.add("");
        }
      });
      alert("Please enter valid values in all fields.");
    } else {
      alert("Your message has been sent successfully!");
    }
  }; /*
  const RegisterMsg = async (name: string, email: string, msg: string) => {
    area_form.addEventListener("submit", () => {});
    alert(`Fullname:${name} email:${email} message:${msg}`);
  };*
  return (
    <footer className="w-full flex items-center justify-center pt-6">
      <div className="bg-slate-950 flex justify-center items-center flex-wrap flex-col gap-5 w-full">
        <form id="area-form" className="grid min-w-80" onSubmit={handleMessage}>
          <label
            htmlFor="full-name"
            className="text-xl font-medium cursor-pointer"
          >
            Full Name
          </label>
          <input
            type="text"
            name="full-name"
            id="full-name"
            className="h-9 outline-none px-2 text-black text-xl  placeholder-shown:bg-white focus:bg-slate-300 placeholder-slate-800"
            placeholder="Enter your full name"
          />
          <label
            htmlFor="email"
            className="text-xl font-medium cursor-pointer pt-3"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="h-9 outline-none px-2 text-black text-xl  placeholder-shown:bg-white focus:bg-slate-300 placeholder-slate-800"
            placeholder="Enter your email address"
          />
          <label
            htmlFor="textarea"
            className="text-xl font-medium cursor-pointer pt-3"
          >
            Message
          </label>
          <textarea
            name="message"
            id="textarea"
            className="h-36 resize-none appearance-none outline-none border-none  px-2 text-black text-xl  placeholder-shown:bg-white focus:bg-slate-300 placeholder-slate-800 "
            placeholder="Write your message here"
          ></textarea>
          <button
            id="submit-msg"
            type="submit"
            className="mt-5 bg-indigo-400 text-2xl font-medium text-black h-10 rounded-md hover:bg-indigo-500 active:bg-indigo-300"
          >
            Send Message
          </button>
        </form>
        <p className="w-full h-12 mt-5 bg-black flex items-center justify-center gap-5">
          {" "}
          <button className="bg-gray-300 text-black text-xl w-16 rounded-md hover:bg-slate-400">
            <a
              href="https://github.com/Mamadou-mbaye/portfolio-ts"
              target="_blank"
            >
              Code
            </a>
          </button>
          &copy; 2024 Modu. Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
};
export default Footer;
*/
