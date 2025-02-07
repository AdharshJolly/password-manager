import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AddCardForm from "@/components/AddCardForm";
import AddPasswordForm from "@/components/AddPasswordForm";
import CardsList from "@/components/CardsList";
import PasswordsList from "@/components/PasswordsList";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-primary">
        Password Manager
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card text-card-foreground">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl">
              Add a Credit/Debit Card
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <AddCardForm />
          </CardContent>
        </Card>
        <Card className="bg-card text-card-foreground">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl">
              Add a Password
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <AddPasswordForm />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2 mt-6 sm:mt-8">
        <Card className="bg-card text-card-foreground">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl">Your Cards</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <CardsList
              cards={
                Array.isArray(user?.privateMetadata?.cards)
                  ? user?.privateMetadata?.cards
                  : []
              }
            />
          </CardContent>
        </Card>
        <Card className="bg-card text-card-foreground">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl">
              Your Passwords
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <PasswordsList
              passwords={
                Array.isArray(user?.privateMetadata?.passwords)
                  ? user?.privateMetadata?.passwords
                  : []
              }
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
