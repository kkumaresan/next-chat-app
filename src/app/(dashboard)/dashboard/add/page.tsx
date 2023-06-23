import AddFriendButton from "@/components/ui/AddFriendButton";
import { FC } from "react";


const Add: FC = () => {
  return (
    <main className="pt-8">
      <h1 className="font-bold text-5xl mb-8">Add a Friend</h1>
      <AddFriendButton />
    </main>
  );
};

export default Add;
