export default function Header() {
  return (
    <header className="navbar bg-base-100 relative sm:sticky top-0 border-b shadow">
      <div
        style={{
          maxWidth: 1200,
        }}
        className="w-full mx-auto flex justify-between p-2 sm:p-0"
      >
        <a
          href="https://shipsar.in"
          className="text-md font-medium hidden sm:flex"
        >
          Shipsar.in
        </a>
        <span className="text-xl font-medium text-center">
          Free Encryption and Decryption Tools
        </span>

        <a href="https://shipsar.in" className="hidden sm:flex">
          Shipsar Developers
        </a>
      </div>
    </header>
  );
}
