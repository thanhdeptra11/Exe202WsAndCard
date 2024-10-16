import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  return (
    <div className="flex justify-center items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <p>Import</p>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Import Shop</DialogTitle>
            <DialogDescription>Import shop from excel file</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-center items-center">
            <input type="file" className="border border-gray-300 rounded-md p-2" accept=".xlsx" />
            {/* {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>} */}
            <Button variant="outline" className="ml-4 mt-2">
              Import
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
