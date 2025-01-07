import { fetchModels } from "@/app/actions/model-actions";
import Configurations from "@/components/image-generation/Configurations";
import GeneratedImages from "@/components/image-generation/GeneratedImages";
import React from "react";

interface searchParams {
  model_id?: string | null;
}

const ImageGeneration = async ({
  searchParams,
}: {
  searchParams: Promise<searchParams>;
}) => {
  const model_id = (await searchParams).model_id || null;
  const { data: userModels } = await fetchModels();
  return (
    <div className="container mx-auto flex-1 grid gap-4 grid-cols-3 overflow-hidden">
      <Configurations userModels={userModels || []} model_id={model_id} />
      <div className="col-span-2 p-4 rounded-xl flex items-center justify-center h-fit">
        <GeneratedImages />
      </div>
    </div>
  );
};

export default ImageGeneration;
