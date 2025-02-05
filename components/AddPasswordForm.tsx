import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AddPasswordForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="website" className="text-sm font-medium">
          Website
        </Label>
        <Input id="website" placeholder="https://example.com" className="w-full" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="username" className="text-sm font-medium">
          Username
        </Label>
        <Input id="username" placeholder="johndoe" className="w-full" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <Input id="password" type="password" placeholder="••••••••" className="w-full" />
      </div>
      <Button className="w-full mt-4">Add Password</Button>
    </form>
  )
}

