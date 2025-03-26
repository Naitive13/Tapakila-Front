export default function UserLayout({ children }) {
  return (
    <div
      className="flex gap-5 justify-center items-stretch py-24 px-5 min-w-full"
    >
      {children}
    </div>
  );
}
