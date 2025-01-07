import { fetchModels } from "@/app/actions/model-actions";
import ModelsList from "@/components/models/ModelsList";
import React from "react";

const Models = async () => {
  const data = await fetchModels();
  return (
    <div className="container mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My models</h1>
        <p className="mt-2 text-muted-foreground">
          View and manage your trained models
        </p>
      </div>
      <ModelsList models={data} />
    </div>
  );
};

export default Models;
