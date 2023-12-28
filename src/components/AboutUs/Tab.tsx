import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ExecList from "./ExecList";
import MgtList from "./MgtList";

const OurExecutives = () => {
  return (
    <>
      <Tabs
        defaultValue="board"
        className="flex flex-col items-center justify-center"
      >
        <TabsList>
          <TabsTrigger value="board">Board of Directors</TabsTrigger>
          <TabsTrigger value="management">Management Team</TabsTrigger>
        </TabsList>
        <TabsContent value="board">
          <ExecList />
        </TabsContent>
        <TabsContent value="management">
          <MgtList />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default OurExecutives;
