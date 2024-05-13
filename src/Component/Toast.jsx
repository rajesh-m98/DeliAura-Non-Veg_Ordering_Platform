import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <div>
      <Toaster
        toastOptions={{
          duration: 2000, position: "right-top", success: { style: { background: "blue", fontSize: "15px", color: "white" }, },
          error: {
            style: {
              background: "blue",
              color: "white",
              fontSize: "15px",
            },
          },
        }}
      />
    </div>
  );
};

export default Toast;
