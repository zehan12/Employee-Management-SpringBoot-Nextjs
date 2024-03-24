import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const AddEmployee = () => {
  return (
    <>
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Add Employee</CardTitle>
          <CardDescription>create new employee in database.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter First Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter Last Name" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-start gap-5">
          <Button variant="outline" className="bg-green-600 text-white hover:text-white hover:bg-green-500">Save</Button>
          <Button variant="destructive" className="hover:bg-red-700">Deploy</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default AddEmployee;
