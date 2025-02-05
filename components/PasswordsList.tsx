import { Button } from "@/components/ui/button"

export default function PasswordsList() {
  // This is a placeholder. In a real app, you'd fetch and map over actual password data.
  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-secondary rounded">
        <span className="text-sm sm:text-base mb-2 sm:mb-0">example.com</span>
        <Button variant="outline" size="sm" className="w-full sm:w-auto">
          View
        </Button>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-secondary rounded">
        <span className="text-sm sm:text-base mb-2 sm:mb-0">anothersite.com</span>
        <Button variant="outline" size="sm" className="w-full sm:w-auto">
          View
        </Button>
      </div>
    </div>
  )
}

