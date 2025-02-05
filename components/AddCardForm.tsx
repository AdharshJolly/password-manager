import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AddCardForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="cardNumber" className="text-sm font-medium">
          Card Number
        </Label>
        <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="w-full" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiryDate" className="text-sm font-medium">
            Expiry Date
          </Label>
          <Input id="expiryDate" placeholder="MM/YY" className="w-full" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvv" className="text-sm font-medium">
            CVV
          </Label>
          <Input id="cvv" placeholder="123" className="w-full" />
        </div>
      </div>
      <Button className="w-full mt-4">Add Card</Button>
    </form>
  )
}

