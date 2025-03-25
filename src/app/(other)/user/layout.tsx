export default function UserLayout({ children }) {
  return (
    <div className="flex gap-1 justify-center items-center py-5 px-5 min-w-full bg-base-200">
      {children}
    </div>
  );
}
