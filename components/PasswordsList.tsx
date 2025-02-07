import Link from "next/link";

interface PasswordProps {
  site: string;
  username: string;
  password: string;
}

export default function PasswordsList({
  passwords,
}: {
  passwords: PasswordProps[];
}) {
  return (
    <div className="space-y-3 h-[300px] overflow-y-scroll hide-scrollbar">
      {passwords.length === 0 && (
        <div className="text-center text-muted-foreground text-sm sm:text-base">
          No passwords added yet
        </div>
      )}
      {passwords.map((password: PasswordProps, index) => (
        <div
          key={index}
          className="flex flex-wrap p-3 bg-secondary rounded px-4"
        >
          <div>
            <span className="text-sm sm:text-base mr-2">Website:</span>
            <Link
              href={password.site}
              target="_blank"
              className="text-sm sm:text-base mr-4 cursor-pointer underline text-blue-600"
            >
              {password.site}
            </Link>
          </div>
          <div>
            <span className="text-sm sm:text-base mr-2">Username:</span>
            <span className="text-sm sm:text-base font-bold mr-4">
              {password.username}
            </span>
          </div>
          <div>
            <span className="text-sm sm:text-base mr-2">Password:</span>
            <span className="text-sm sm:text-base font-bold">
              {password.password}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
