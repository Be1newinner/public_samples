import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Decryption from "@/components/Decryption";
import Encryption from "@/components/Encryption";

export default function Home() {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Header />
      <main className="flex flex-col items-center bg-slate-100 justify-between p-3 sm:p-8">
        <div
          style={{
            maxWidth: 1200,
          }}
          className="mx-auto w-full flex flex-col gap-4"
        >
          <p className="flex gap-2 items-center">
            <span>Type of Encryption Used: </span>{" "}
            <span className="text-xs">AES 256 CBC Encryption</span>
          </p>

          <div className="flex flex-wrap sm:flex-nowrap">
            <Encryption />
            <div className="divider divider-horizontal hidden sm:flex">OR</div>
            <Decryption />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
